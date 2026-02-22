"use client";
import About from "@/components/About";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Project } from "@/components/Project";
import { useEffect } from "react";
import { initFlashlight } from "../utils/flashlight";
import { SiNodedotjs, SiReact, SiTailwindcss, SiVuedotjs } from "react-icons/si";

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
              technologies={["NodeJS", "Angular", "SCSS"]}
            />
            <Experience
              showTitle={false}
              title="Full Stack Developer - Zoppy"
              time="July 2025 - October 2025"
              text="Full Stack Developer, responsible for implementing new features, maintaining the internal system. Worked on continuous performance improvement and application evolution, ensuring greater efficiency and quality in deliveries."
              technologies={["Angular", "NestJS", "MySQL", "Tailwind CSS"]}
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
              title="Synapse"
              href="https://github.com/ricardofpe/synapse"
              description="A conversational AI app built with Express, React, Node.js and styled with Tailwindcss. Synapse lets you engage in natural language conversations with a powerful AI, powered by the Llama Model."
              technologies={[
                { icon: <SiReact className="mr-2" size={18} />, name: "React" },
                {
                  icon: <SiNodedotjs className="mr-2" size={18} />,
                  name: "Node",
                },
                {
                  icon: <SiTailwindcss className="mr-2" size={18} />,
                  name: "Tailwind CSS",
                },
              ]}
              altText="Synapse"
              isLink={true}
            />
            <Project
              showTitle={false}
              title="Game Wild"
              href="https://game-wild-dc.vercel.app/"
              description="Developed with Vue.js, Tailwind CSS, and Node.js, this landing page serves as the first point of contact for users interested in joining the Game Wild Discord server."
              technologies={[
                { icon: <SiTailwindcss className="mr-2" size={18} />, name: "Tailwind CSS" },
                { icon: <SiVuedotjs className="mr-2" size={18} />, name: "Vue" },
                {
                  icon: <SiNodedotjs className="mr-2" size={18} />,
                  name: "Node",
                },
              ]}
              altText="Game Wild"
              isLink={true}
            />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );

}