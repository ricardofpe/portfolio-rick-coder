"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.7)",
        delay: 0.8,
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="mt-20 mb-10 px-4 flex justify-center lg:mt-24 id='footer'"
    >
      <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left">
        Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="text-white hover:text-sky-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </a>{" "}
        by yours truly. Built with{" "}
        <a
          href="https://nextjs.org/"
          className="text-white hover:text-sky-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="text-white hover:text-sky-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="text-white hover:text-sky-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
        . All text is set in the Poppins typeface.
      </p>
    </footer>
  );
}
