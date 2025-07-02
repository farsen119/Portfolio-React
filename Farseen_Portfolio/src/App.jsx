import React, { useState, useRef, useEffect } from "react";
import { MdOutlineColorLens } from "react-icons/md";
import AboutMeMain from "./components/aboutmeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footerSection/FooterMain";
import HeroGradient from "./components/herosection/HeroGradient";
import HeroMain from "./components/herosection/HeroMain";
import SubHeroSection from "./components/herosection/SubHeroSection";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import WhatsappFloatButton from "./components/WhatsappFloatButton";

// Only the extra theme options (not the main color)
const themes = [
  { name: "Dark", color: "#000" },
  { name: "Rose", color: "#4b363e" },
  { name: "Cyan", color: "#45919c" },
];

export default function App() {
  const [themeIndex, setThemeIndex] = useState(null); // null = main color
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // If themeIndex is null, use default bg (from index.css)
  // If themeIndex is set, override with inline style
  const style = themeIndex !== null
    ? { backgroundColor: themes[themeIndex].color }
    : {};

  return (
    <div
      className="font-body min-h-screen transition-colors duration-300"
      style={style}
    >
      {/* Palette Icon Button */}
      <div className="fixed top-4 right-4 z-50" ref={menuRef}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="p-3 rounded-full bg- text-black font-bold shadow-lg border border-none hover:scale-110 transition-all flex items-center justify-center"
          title="Change Theme"
        >
          <MdOutlineColorLens size={28} />
        </button>
        {open && (
          <div className="mt-2 bg-[#af9191] rounded-lg shadow-lg border border-none flex flex-col min-w-[120px]">
            {/* Option to reset to main color */}
            <button
              onClick={() => {
                setThemeIndex(null);
                setOpen(false);
              }}
              className={`px-4 py-2 text-left font-semibold hover:bg-orange hover:text-black transition-all rounded ${
                themeIndex === null ? "bg-cyan text-black" : "text-black"
              }`}
            >
              Main
            </button>
            {themes.map((theme, idx) => (
              <button
                key={theme.name}
                onClick={() => {
                  setThemeIndex(idx);
                  setOpen(false);
                }}
                className={`px-4 py-2 text-left font-semibold hover:bg-cyan hover:text-black transition-all rounded ${
                  themeIndex === idx ? "bg-cyan text-black" : "text-black"
                }`}
                style={{
                  backgroundColor: themeIndex === idx ? theme.color : undefined,
                  color: themeIndex === idx ? "#fff" : undefined,
                }}
              >
                {theme.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
      <WhatsappFloatButton/>
    </div>
  );
}