"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProjectProps {
  title: string;
  href: string;
  description: string;
  technologies: { icon: React.ReactElement; name: string }[];
  imageSrc: string | StaticImageData;
  altText: string;
}

export const Project = ({
  title,
  href,
  description,
  technologies,
  imageSrc,
  altText,
}: ProjectProps) => {
  const projectRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  return (
    <section ref={projectRef} className="flex flex-col mt-20 gap-6 px-4">
      <h6 className="font-semibold text-sm uppercase mb-6 text-gray-400 md:text-base lg:text-lg">
        PROJECTS
      </h6>{" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center font-medium text-gray-100 hover:text-sky-300 transition-colors duration-200 md:text-lg lg:text-xl"
      >
        {title}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
        {description}
      </p>
      <div className="flex mt-1 mb-1 flex-wrap gap-2 text-sm md:gap-3 lg:gap-4">
        {technologies.map((tech) => (
          <span
            key={tech.name}
            className="flex items-center border border-gray-700 border-opacity-20 bg-gradient-to-r from-gray-800 to-gray-600 text-gray-100 px-3 py-1 rounded-full inline-block md:px-4 md:py-1.5 lg:px-5 lg:py-2"
          >
            {tech.icon}
            <span>{tech.name}</span>
          </span>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Image
          src={imageSrc}
          alt={altText}
          width={400}
          height={200}
          className="shadow-md md:w-[600px] lg:w-[800px] md:h-auto"
        />
      </div>
    </section>
  );
};
