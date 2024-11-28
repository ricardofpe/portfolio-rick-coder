"use client";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      let mostVisibleSection = activeSection;
      let highestVisibilityRatio = 0;

      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          const sectionHeight = rect.height;

          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          const visibilityRatio = Math.max(0, visibleHeight / sectionHeight);

          if (visibilityRatio > highestVisibilityRatio) {
            highestVisibilityRatio = visibilityRatio;
            mostVisibleSection = sectionId;
          }
        }
      });

      setActiveSection(mostVisibleSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <header className="p-4 flex flex-col lg:fixed lg:items-center lg:justify-between lg:h-screen lg:pt-0 lg:pb-44">
      <div className="lg:w-full">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Rick Code
        </h2>
        <h6 className="mt-2 text-lg font-semibold md:text-xl lg:text-2xl">
          Software Engineer
        </h6>
        <p className="mt-2 max-w-96 text-gray-300 md:text-lg lg:text-xl">
          I build accessible, precise, and visually refined web experiences with
          care and detail.
        </p>
      </div>

      <div className="hidden lg:flex flex-col gap-5 w-[100%] mt-4">
        <a
          href="#about"
          className={`text-gray-300 hover:text-white transition-colors ${
            activeSection === "about" ? "font-bold text-xl" : ""
          }`}
        >
          About
        </a>
        <a
          href="#experience"
          className={`text-gray-300 hover:text-white transition-colors ${
            activeSection === "experience" ? "font-bold text-xl" : ""
          }`}
        >
          Experience
        </a>
        <a
          href="#projects"
          className={`text-gray-300 hover:text-white transition-colors ${
            activeSection === "projects" ? "font-bold text-xl" : ""
          }`}
        >
          Projects
        </a>
      </div>

      <div className="mt-4 lg:mt-0 gap-3 flex lg:flex-row w-[100%] lg:items-center lg:gap-6">
        <a
          href="https://linkedin.com/in/ricardofpe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaLinkedin size={24} className="lg:w-8 lg:h-8" />
        </a>
        <a
          href="https://github.com/ricardofpe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaGithub size={24} className="lg:w-8 lg:h-8" />
        </a>
      </div>
    </header>
  );
}
