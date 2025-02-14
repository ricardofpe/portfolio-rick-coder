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
        I&apos;m a passionate full-stack developer dedicated to crafting
        accessible and visually stunning user interfaces that seamlessly blend
        thoughtful design with robust engineering. My ideal projects lie at the
        intersection of design and development, creating experiences that are
        not only aesthetically pleasing but also meticulously built for optimal
        performance and usability.
      </p>

      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
        My skillset spans front-end, back-end, and mobile development. On the
        front-end, I&apos;m proficient in React, Next.js, Vue.js, TypeScript, and
        JavaScript, leveraging styling frameworks like Tailwind CSS and Styled
        Components to build modern and responsive interfaces. For the back-end,
        I utilize Node.js and NestJS to construct robust and scalable APIs. My
        mobile development experience is primarily with React Native. MongoDB is
        my preferred database solution for many projects. In the DevOps space,
        I have proficiency in Docker and Kubernetes for containerization and
        orchestration. I hold a Graduation in Systems Analysis and
        Development and have one year of professional experience in the field.
      </p>

      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
        Throughout my career, I&apos;ve focused on developing integration
        systems designed to simplify user workflows and automate repetitive
        processes, significantly improving efficiency and user experience. This
        experience has been gained across a variety of projects and contexts.
      </p>
    </section>
  );
}