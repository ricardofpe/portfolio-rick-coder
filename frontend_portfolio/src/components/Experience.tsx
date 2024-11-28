"use client";
import { useEffect, useRef } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiStyledcomponents,
} from "react-icons/si";
import gsap from "gsap";

export const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      experienceRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  const technologyIcons: { [key: string]: React.ReactElement } = {
    React: <SiReact className="mr-2" size={18} />,
    NodeJS: <SiNodedotjs className="mr-2" size={18} />,
    "Styled Components": <SiStyledcomponents className="mr-2" size={18} />,
    MongoDB: <SiMongodb className="mr-2" size={18} />,
  };

  const technologies = ["React", "NodeJS", "Styled Components", "MongoDB"];

  return (
    <section
      ref={experienceRef}
      className="flex flex-col mt-20 gap-6 px-4 id='experience'"
    >
      <h6 className="font-semibold text-sm uppercase mb-6 text-gray-400 md:text-base lg:text-lg">
        EXPERIENCE
      </h6>

      <span className="text-sm text-gray-500 md:text-base lg:text-lg">
        2024 - PRESENT
      </span>

      <h6 className="font-medium text-gray-100 md:text-lg lg:text-xl">
        Systems Analysis and Development - Notorium Certificadora Digital
      </h6>

      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
        I develop systems to simplify user experience, integrating APIs and
        automating manual processes. My work focuses on creating efficient and
        user-friendly solutions. I strive to streamline workflows and improve
        overall productivity through well-designed and robust systems.
      </p>

      <div className="flex mt-1 flex-wrap gap-2 text-sm md:gap-3 lg:gap-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="flex items-center border border-gray-700 border-opacity-20 bg-gradient-to-r from-gray-800 to-gray-600 text-gray-100 px-3 py-1 rounded-full inline-block md:px-4 md:py-1.5 lg:px-5 lg:py-2"
          >
            {technologyIcons[tech]}
            <span>{tech}</span>
          </span>
        ))}
      </div>
    </section>
  );
};
