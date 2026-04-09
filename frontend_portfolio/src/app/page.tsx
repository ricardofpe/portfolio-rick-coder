"use client";
import About from "@/components/About";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Project } from "@/components/Project";
import { useEffect } from "react";
import { initFlashlight } from "../utils/flashlight";
import { SiNodedotjs, SiReact, SiTailwindcss, SiMongodb, SiNestjs, SiAngular, SiMysql } from "react-icons/si";

export default function Home() {
  useEffect(() => {
    initFlashlight();
  }, []);

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
            <Experience
              showTitle={true}
              title="Full Stack Developer - Crosoften"
              time="January 2026 - PRESENT"
              text="Full Stack Developer, performing regular adjustments, simple completions, or rollbacks on the front-end, back-end, and integrations. My work involves front-end, back-end development, and integrations."
              technologies={["NodeJS", "Angular", "NestJS", "Tailwind CSS"]}
            />
            <Experience
              showTitle={false}
              title="Full Stack Developer - Notorium Certificadora Digital e TI"
              time="June 2024 - PRESENT"
              text="Analysis and Systems Development. Seeking task automation and building integration systems with various APIs, managing databases, developing complete systems participating in the entire Frontend, Backend, and Deploy cycle."
              technologies={["React", "NodeJS", "MongoDB", "Tailwind CSS", "StyledComponents"]}
            />
          </section>
          <section id="projects">
            <Project
              showTitle={true}
              title="Hopion"
              href="https://hopion.com.br/"
              description="Institutional website for a software company that develops on-demand solutions. Built with a focus on modern UX/UI, clear communication, and a clean digital presence."
              technologies={[
                { icon: <SiReact className="mr-2" size={18} />, name: "React" },
                {
                  icon: <SiTailwindcss className="mr-2" size={18} />,
                  name: "Tailwind CSS",
                },
                {
                  icon: <SiNodedotjs className="mr-2" size={18} />,
                  name: "Node",
                },
              ]}
              altText="Hopion"
              isLink={true}
            />
            <Project
              showTitle={false}
              title="Meu Bolinho"
              href="https://meubolinho.com.br/"
              description="A platform that helps users find establishments for celebrations — restaurants, party suppliers, cultural events and more. Full stack development with frontend, backend, and integrations."
              technologies={[
                { icon: <SiAngular className="mr-2" size={18} />, name: "Angular" },
                {
                  icon: <SiNestjs className="mr-2" size={18} />,
                  name: "NestJS",
                },
                {
                  icon: <SiMysql className="mr-2" size={18} />,
                  name: "MySQL",
                },
                {
                  icon: <SiTailwindcss className="mr-2" size={18} />,
                  name: "Tailwind CSS",
                },
              ]}
              altText="Meu Bolinho"
              isLink={true}
            />
            <Project
              showTitle={false}
              title="Sounotorium"
              href="https://sounotorium.com.br/"
              description="A referral management system built for a digital certification company. Handles the full referral lifecycle with integrations and automation across frontend, backend, and deploy."
              technologies={[
                { icon: <SiReact className="mr-2" size={18} />, name: "React" },
                {
                  icon: <SiNodedotjs className="mr-2" size={18} />,
                  name: "Node",
                },
                {
                  icon: <SiMongodb className="mr-2" size={18} />,
                  name: "MongoDB",
                },
                {
                  icon: <SiTailwindcss className="mr-2" size={18} />,
                  name: "Tailwind CSS",
                },
              ]}
              altText="Sounotorium"
              isLink={true}
            />

          </section>
          <Footer />
        </div>
      </div>
    </div>
  );

}