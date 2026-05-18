import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Capabilities } from "./components/Capabilities";
import { Process } from "./components/Process";
import { Gallery } from "./components/Gallery";
import { CustomSolutions } from "./components/CustomSolutions";
import { Consult } from "./components/Consult";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Process />
        <Gallery />
        <CustomSolutions />
        <Consult />
      </main>
      <Footer />
    </>
  );
}
