"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useApp } from "@/context/AppContext";
import { t } from "@/translations";

export default function About() {
  const aboutRef = useRef(null);
  const { lang } = useApp();
  const tr = t[lang].about;

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
        {tr.title}
      </h6>
      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">{tr.p1}</p>
      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">{tr.p2}</p>
      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">{tr.p3}</p>
    </section>
  );
}
