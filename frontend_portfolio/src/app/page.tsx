"use client";
import About from "@/components/About";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Project } from "@/components/Project";
import { useEffect } from "react";
import { initFlashlight } from "../utils/flashlight";
import { SiNodedotjs, SiReact, SiTailwindcss, SiMongodb, SiNestjs, SiAngular, SiMysql } from "react-icons/si";
import { useApp } from "@/context/AppContext";
import { t } from "@/translations";

export default function Home() {
  const { lang } = useApp();
  const tr = t[lang];

  useEffect(() => {
    initFlashlight();
  }, []);

  const projectHrefs = [
    "https://hopion.com.br/",
    "https://meubolinho.com.br/",
    "https://sounotorium.com.br/",
    "https://pedroviana.vercel.app/",
  ];

  const projectTechs = [
    [
      { icon: <SiReact className="mr-2" size={18} />, name: "React" },
      { icon: <SiTailwindcss className="mr-2" size={18} />, name: "Tailwind CSS" },
      { icon: <SiNodedotjs className="mr-2" size={18} />, name: "Node" },
    ],
    [
      { icon: <SiAngular className="mr-2" size={18} />, name: "Angular" },
      { icon: <SiNestjs className="mr-2" size={18} />, name: "NestJS" },
      { icon: <SiMysql className="mr-2" size={18} />, name: "MySQL" },
      { icon: <SiTailwindcss className="mr-2" size={18} />, name: "Tailwind CSS" },
    ],
    [
      { icon: <SiReact className="mr-2" size={18} />, name: "React" },
      { icon: <SiNodedotjs className="mr-2" size={18} />, name: "Node" },
      { icon: <SiMongodb className="mr-2" size={18} />, name: "MongoDB" },
      { icon: <SiTailwindcss className="mr-2" size={18} />, name: "Tailwind CSS" },
    ],
    [
      { icon: <SiReact className="mr-2" size={18} />, name: "React" },
      { icon: <SiTailwindcss className="mr-2" size={18} />, name: "Tailwind CSS" },
    ],
  ];

  return (
    <div className="container container-wide">
      <div className="lg:flex lg:flex-row lg:mt-10">
        <div className="lg:w-1/2 lg:pr-8">
          <Header />
        </div>
        <div className="lg:w-1/2">
          <section id="about">
            <About />
          </section>
          <section id="experience">
            {tr.experience.jobs.map((job, i) => (
              <Experience
                key={i}
                showTitle={i === 0}
                title={job.title}
                time={job.time}
                text={job.text}
                technologies={
                  i === 0
                    ? ["NodeJS", "Angular", "NestJS", "Tailwind CSS"]
                    : ["React", "NodeJS", "MongoDB", "Tailwind CSS", "StyledComponents"]
                }
                experienceTitle={tr.experience.title}
              />
            ))}
          </section>
          <section id="projects">
            {tr.projects.items.map((project, i) => (
              <Project
                key={i}
                showTitle={i === 0}
                title={project.title}
                href={projectHrefs[i]}
                description={project.description}
                technologies={projectTechs[i]}
                altText={project.title}
                isLink={true}
                projectsTitle={tr.projects.title}
              />
            ))}
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}
