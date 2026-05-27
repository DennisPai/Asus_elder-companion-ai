import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import SectionWhyNow from '../components/SectionWhyNow';
import SectionProblem from '../components/SectionProblem';
import SectionSolution from '../components/SectionSolution';
import SectionMarket from '../components/SectionMarket';
import SectionBusinessModel from '../components/SectionBusinessModel';
import SectionUnitEcon from '../components/SectionUnitEcon';
import SectionWhyUsMoat from '../components/SectionWhyUsMoat';
import SectionTech from '../components/SectionTech';
import SectionRoadmap from '../components/SectionRoadmap';
import SectionFinancials from '../components/SectionFinancials';
import SectionRisks from '../components/SectionRisks';
import SectionAsk from '../components/SectionAsk';
import SectionQA from '../components/SectionQA';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SectionWhyNow />
        <SectionProblem />
        <SectionSolution />
        <SectionMarket />
        <SectionBusinessModel />
        <SectionUnitEcon />
        <SectionWhyUsMoat />
        <SectionTech />
        <SectionRoadmap />
        <SectionFinancials />
        <SectionRisks />
        <SectionAsk />
        <SectionQA />
      </main>
    </>
  );
}
