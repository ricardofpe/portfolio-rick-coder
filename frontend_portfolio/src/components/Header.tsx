import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="p-4 flex flex-col lg:fixed lg:items-center lg:justify-between lg:h-screen lg:pt-0 lg:pb-44">
      <div className="lg:w-full lg:basis-1/2">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Rick Code
        </h2>
        <h6 className="mt-2 text-lg font-semibold md:text-xl lg:text-2xl">
          Software Engineer
        </h6>
        <p className="mt-2 max-w-96 text-gray-300 md:text-lg lg:text-xl">
          I build accessible, precise, and visually refined web experiences with
          care and detail.
        </p>
      </div>

      <div className="mt-4 lg:mt-0 gap-3 flex lg:flex-row w-[100%] lg:items-center lg:gap-6">
        <a
          href="https://linkedin.com/in/ricardofpe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaLinkedin size={24} className="lg:w-8 lg:h-8" />
        </a>
        <a
          href="https://github.com/ricardofpe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaGithub size={24} className="lg:w-8 lg:h-8" />
        </a>
      </div>
    </header>
  );
}
