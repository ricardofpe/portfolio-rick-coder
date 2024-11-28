"use client";
import About from "@/components/About";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Project } from "@/components/Project";
import { useEffect } from "react";
import { initFlashlight } from "../utils/flashlight";
import { SiDotnet, SiReact, SiTailwindcss } from "react-icons/si";
import oficinaDasFacas from "../../public/oficina_facas_site.png";

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
              title="Systems Analysis and Development - Notorium Certificadora Digital"
              time="2024 - PRESENT"
              text="I develop systems to simplify user experience, integrating APIs and automating manual processes. My work focuses on creating efficient and user-friendly solutions. I strive to streamline workflows and improve overall productivity through well-designed and robust systems."
              technologies={["React", "NodeJS", "MongoDB", "StyledComponents"]}
            />
          </section>
          <section id="projects">
            <Project
              title="Oficina das Facas"
              href="https://oficinadasfacas.com.br/index"
              description="Developed a full-stack e-commerce application, 'Oficina das Facas,' utilizing React for the frontend and C# with .NET for the backend.  The platform features a sleek and modern design implemented with Tailwind CSS, providing a user-friendly experience for browsing and purchasing products."
              technologies={[
                { icon: <SiReact className="mr-2" size={18} />, name: "React" },
                { icon: <SiDotnet className="mr-2" size={18} />, name: ".NET" },
                {
                  icon: <SiTailwindcss className="mr-2" size={18} />,
                  name: "Tailwind CSS",
                },
              ]}
              imageSrc={oficinaDasFacas}
              altText="Oficina das Facas Screenshot"
            />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}
