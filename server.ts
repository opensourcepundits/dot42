import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

const markdownContent = `# dot42 - Custom Machine Learning Architecture

dot42 provides custom machine learning architecture, neural network deployments, and enterprise infrastructure solutions.

## Why Work with Us

- **Agile & Transparent**: We bypass bureaucratic bloat. You get direct access to engineering talent, clear milestones, and rapid iterations.
- **Custom Topologies**: We don't sell off-the-shelf wrappers. We architect bespoke neural network deployments that align perfectly with your infrastructure constraints.
- **Data Privacy & Integrity**: Your proprietary data remains yours. We prioritize data integrity, operate under strict NDAs, and ensure zero data leakage across our localized sandbox environments.
- **Elite Craftsmanship**: We take pride in writing elegant, highly optimized code. Our deliverables are robust, well-documented, and production-ready from day one.

## Specializations

- Computer Vision
- Natural Language Processing
- MLOps & Infrastructure
- Predictive Analytics

## Deliverables

- Full Source Code Access
- Comprehensive Documentation
- CI/CD Pipelines

Reach out to contact@dot42.dev to get in touch.
`;

const markdown404 = `# 404 Not Found

The page you are looking for does not exist. 
Please visit the [homepage](/) or check our [sitemap](/sitemap.xml).
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to handle Markdown content negotiation for the homepage
  app.get("/", async (req, res, next) => {
    if (req.headers.accept?.includes("text/markdown")) {
      res.set("Vary", "Accept, Accept-Encoding");
      res.type("text/markdown");
      res.send(markdownContent);
      return;
    }
    next();
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom", // Prevent Vite from auto-rewriting all unmatched routes to index.html
    });
    
    app.use(vite.middlewares);
    
    app.get("/", async (req, res, next) => {
      try {
        let template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    app.get("/", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // 404 Handler - Catch-all for non-existent routes
  app.use("*", (req, res) => {
    res.status(404);
    
    if (req.headers.accept?.includes("text/markdown")) {
      res.set("Vary", "Accept, Accept-Encoding");
      res.type("text/markdown");
      res.send(markdown404);
    } else {
      res.type("text/html");
      res.send(`<!DOCTYPE html>
<html>
<head><title>404 Not Found</title></head>
<body>
  <h1>404 Not Found</h1>
  <p>The page you are looking for does not exist. Please visit the <a href="/">homepage</a> or check our <a href="/sitemap.xml">sitemap</a>.</p>
</body>
</html>`);
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
