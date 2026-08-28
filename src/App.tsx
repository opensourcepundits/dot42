import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Specializations } from "./components/Specializations";
import { WhyWorkWithUs } from "./components/WhyWorkWithUs";
import { Process } from "./components/Process";
import { Deliverables } from "./components/Deliverables";
import { CaseStudies } from "./components/CaseStudies";
import { Consult } from "./components/Consult";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specializations />
        <WhyWorkWithUs />
        <Process />
        <Deliverables />
        <CaseStudies />
        <Consult />
      </main>
      <Footer />
    </>
  );
}
