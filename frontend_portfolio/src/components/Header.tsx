"use client";
import { useEffect, useState, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import gsap from "gsap";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const headerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const socialIconsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      linksRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      socialIconsRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.5,
      }
    );
  }, []);

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
    <header
      ref={headerRef}
      className="p-4 flex flex-col lg:fixed lg:items-center lg:justify-between lg:h-screen lg:pt-0 lg:pb-44"
    >
      <div className="lg:w-full">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Rick Coder
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
        {["about", "experience", "projects"].map((section, index) => (
          <a
            key={section}
            href={`#${section}`}
            className={`text-gray-300 hover:text-white transition-colors ${
              activeSection === section ? "font-bold text-xl" : ""
            }`}
            ref={(el) => {
              linksRef.current[index] = el!;
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <div className="mt-4 lg:mt-0 gap-3 flex lg:flex-row w-[100%] lg:items-center lg:gap-6">
        <a
          href="https://linkedin.com/in/ricardofpe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
          ref={(el) => {
            socialIconsRef.current[0] = el!;
          }}
        >
          <FaLinkedin size={24} className="lg:w-8 lg:h-8" />
        </a>
        <a
          href="https://github.com/ricardofpe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
          ref={(el) => {
            socialIconsRef.current[1] = el!;
          }}
        >
          <FaGithub size={24} className="lg:w-8 lg:h-8" />
        </a>
      </div>
    </header>
  );
}
