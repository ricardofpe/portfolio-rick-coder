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
              title="Full Stack Developer - Notorium Certificadora Digital"
              time="2024 - PRESENT"
              text="I develop systems to simplify user experience, integrating APIs and automating manual processes. My work focuses on creating efficient and user-friendly solutions. I strive to streamline workflows and improve overall productivity through well-designed and robust systems."
              technologies={["React", "NodeJS", "MongoDB", "StyledComponents"]}
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