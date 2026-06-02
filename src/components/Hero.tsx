import { motion } from "motion/react";

const networkLayers = [
  { id: 'i', x: 2, nodes: [35, 50, 65] },
  { id: 'h1', x: 26, nodes: [15, 38, 62, 85] },
  { id: 'h2', x: 50, nodes: [15, 38, 62, 85] },
  { id: 'h3', x: 74, nodes: [15, 38, 62, 85] },
  { id: 'o', x: 98, nodes: [35, 65] }
];

const networkLinks: Array<{id: string, x1: number, y1: number, x2: number, y2: number}> = [];
for (let l = 0; l < networkLayers.length - 1; l++) {
  const sourceLayer = networkLayers[l];
  const targetLayer = networkLayers[l+1];
  for (let sIdx = 0; sIdx < sourceLayer.nodes.length; sIdx++) {
    for (let tIdx = 0; tIdx < targetLayer.nodes.length; tIdx++) {
      networkLinks.push({
        id: `link-${sourceLayer.id}${sIdx}-${targetLayer.id}${tIdx}`,
        x1: sourceLayer.x, y1: sourceLayer.nodes[sIdx],
        x2: targetLayer.x, y2: targetLayer.nodes[tIdx]
      });
    }
  }
}

const litLinks: Array<{id: string, x1: number, y1: number, x2: number, y2: number, delay: number}> = [];
const numPaths = 12;
for (let p=0; p < numPaths; p++) {
  const path = [];
  path.push([0, 1, 2][Math.floor(Math.random() * 3)]); // i
  path.push([0, 2, 3][Math.floor(Math.random() * 3)]); // h1
  path.push([0, 1, 3][Math.floor(Math.random() * 3)]); // h2
  path.push([1, 2, 3][Math.floor(Math.random() * 3)]); // h3
  path.push([0, 1][Math.floor(Math.random() * 2)]); // o

  const pathDelay = Math.random() * 5;
  for(let l=0; l < 4; l++) {
    litLinks.push({
       id: `lit-${p}-${l}`,
       x1: networkLayers[l].x, y1: networkLayers[l].nodes[path[l]],
       x2: networkLayers[l+1].x, y2: networkLayers[l+1].nodes[path[l+1]],
       delay: pathDelay + l * 0.3
    });
  }
}

const networkNodes: Array<{id: string, x: number, y: number, dropsOut: boolean, delay: number}> = [];
networkLayers.forEach((layer, lIdx) => {
  layer.nodes.forEach((y, nIdx) => {
    const dropsOut = (layer.id === 'h1' && nIdx === 1) || (layer.id === 'h2' && nIdx === 2) || (layer.id === 'h3' && nIdx === 0);
    networkNodes.push({
      id: `node-${layer.id}-${nIdx}`,
      x: layer.x, y,
      dropsOut,
      delay: Math.random() * 4
    });
  });
});

export function Hero() {
  return (
    <section
      className="min-h-screen pt-[120px] pb-12 lg:pb-16 flex flex-col justify-center max-w-[1440px] mx-auto w-full overflow-hidden"
      id="hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center px-10">
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <h1 className="font-display-lg text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tighter">
            Custom Deterministic AI Architectures{" "}
            <span className="block mt-2">
              <span className="text-primary-container">for Scale.</span>
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            We build custom AI models for your business that run 100x cheaper and respond in milliseconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button 
              onClick={() => {
                document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-container text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-none transition-transform hover:brightness-110 active:scale-95 uppercase"
            >
              GET IN TOUCH
            </button>
            <button 
              onClick={() => {
                document.getElementById('specializations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-outline-variant/30 text-on-surface font-label-caps text-label-caps px-8 py-4 rounded-none transition-all hover:bg-on-surface/5 active:scale-95 uppercase"
            >
              WHAT WE DO
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
          <div className="relative w-full max-w-[400px] lg:max-w-md xl:max-w-[480px] aspect-square bg-surface-container-low border border-outline-variant/20 rounded-lg overflow-hidden bento-border flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.04)_1px,transparent_1px)] bg-[length:16px_16px]" />
            <svg viewBox="0 0 100 100" className="w-[90%] h-[90%] z-10 overflow-visible drop-shadow-[0_0_8px_rgba(0,229,255,0.15)]">
              {networkLinks.map(link => (
                <line 
                  key={`${link.id}-base`} 
                  x1={link.x1} y1={link.y1} 
                  x2={link.x2} y2={link.y2} 
                  stroke="#bac9cc" 
                  strokeWidth="0.4" 
                  strokeOpacity="0.15" 
                />
              ))}
              
              {litLinks.map(link => (
                <motion.line 
                  key={link.id} 
                  x1={link.x1} y1={link.y1} 
                  x2={link.x2} y2={link.y2} 
                  stroke="#00e5ff" 
                  strokeWidth="0.8" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0, 0] }}
                  times={[0, 0.2, 0.4, 1]}
                  transition={{ duration: 3.5, repeat: Infinity, delay: link.delay, ease: "easeInOut" }}
                />
              ))}

              {networkNodes.map(node => (
                <motion.circle 
                  key={node.id} 
                  cx={node.x} cy={node.y} 
                  fill={node.dropsOut ? "#bac9cc" : "#00daf3"}
                  animate={
                    node.dropsOut 
                      ? { opacity: [1, 1, 0.15, 0.15, 1], r: [2, 2, 1.5, 1.5, 2] } 
                      : { opacity: [0.7, 1, 0.7], r: [2, 2.5, 2] }
                  }
                  transition={
                    node.dropsOut 
                      ? { duration: 6, repeat: Infinity, delay: node.delay, ease: "easeInOut" } 
                      : { duration: 2, repeat: Infinity, delay: node.delay, ease: "easeInOut" }
                  }
                />
              ))}
              
              <motion.circle cx="98" cy="35" r="4" fill="none" stroke="#00e5ff" strokeWidth="0.5" animate={{ scale: [1, 1.8], opacity: [0.8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.circle cx="98" cy="65" r="4" fill="none" stroke="#00e5ff" strokeWidth="0.5" animate={{ scale: [1, 1.8], opacity: [0.8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
            </svg>
            <div className="absolute top-4 left-4 font-label-caps text-[8px] md:text-[10px] text-primary-container opacity-60">
              <p>NETWORK_TOPOLOGY: 3 HIDDEN_LAYERS</p>
              <p>DROPOUT_RATE: ACTIVE</p>
            </div>
            <div className="absolute bottom-4 right-4 font-label-caps text-[8px] md:text-[10px] text-primary-container opacity-60 text-right">
              <p>INFERENCE: REALTIME</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
