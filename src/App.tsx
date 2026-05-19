import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Specializations } from "./components/Specializations";
import { Process } from "./components/Process";
import { Deliverables } from "./components/Deliverables";
import { CustomSolutions } from "./components/CustomSolutions";
import { Consult } from "./components/Consult";
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
        <CustomSolutions />
        <Consult />
      </main>
      <Footer />
    </>
  );
}
