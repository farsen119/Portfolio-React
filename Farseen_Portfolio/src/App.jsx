
import AboutMeMain from "./components/aboutmeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import HeroGradient from "./components/herosection/HeroGradient";
import HeroMain from "./components/herosection/HeroMain";
import SubHeroSection from "./components/herosection/SubHeroSection";
import NavbarMain from "./components/navbar/NavbarMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";

export default function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <HelperSection/>
    </main>
  );
}