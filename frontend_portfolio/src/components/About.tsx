"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  return (
    <section ref={aboutRef} className="flex flex-col mt-28 lg:mt-0 gap-6 px-4">
      <h6 className="font-semibold text-sm uppercase mb-6 text-gray-400 md:text-base lg:text-lg">
        ABOUT
      </h6>

      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
        Full-Stack Developer with expertise in front-end, back-end, and mobile development, focused on creating modern, scalable, and high-performance solutions. Highly skilled in developing responsive interfaces with React, Next.js, Vue.js, Angular, TypeScript, JavaScript, Tailwind CSS, and Styled Components. On the back-end, I have extensive experience building robust APIs with Node.js and NestJS, as well as proficiency in databases such as MongoDB, SQL Server, MySQL, and PostgreSQL. I also have expertise in infrastructure and DevOps technologies like Docker, AWS, Redis, and RabbitMQ, along with mobile development using React Native. I have a strong command of database management, architecture, code quality, and performance, always seeking to deliver technical solutions that generate real impact.
      </p>

      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
        My skillset includes programming languages such as Node.js, TypeScript, JavaScript, and C#. I work with frameworks and libraries like Next, Nest, React, Vue, .Net Core, Angular, TailwindCSS, and Bootstrap. For databases, I&apos;m experienced with SQL Server, MongoDB, MySql, and PostgreSQL. In mobile development, I specialize in React Native. My DevOps toolkit includes Docker, AWS, Redis, and RabbitMQ. I also have experience with testing tools like Jest and Jasmine.
      </p>

      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
        Throughout my career, I&apos;ve focused on developing integration systems designed to simplify user workflows and automate repetitive processes, significantly improving efficiency and user experience. I hold a degree in Systems Analysis and Development from PUC MG (2022-2024) and have professional experience across various projects and contexts.
      </p>
    </section>
  );
}
