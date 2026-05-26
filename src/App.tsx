import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Specializations } from "./components/Specializations";
import { Process } from "./components/Process";
import { Deliverables } from "./components/Deliverables";
import { Consult } from "./components/ConsultSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specializations />
        <Process />
        <Deliverables />
        <Consult />
      </main>
      <Footer />
    </>
  );
}
