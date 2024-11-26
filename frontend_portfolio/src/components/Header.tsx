import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div className="gap-5 flex flex-col">
        <div>
          <h2 className="text-3xl font-bold">Rick Code</h2>
        </div>
        <div>
          <h6 className="text-lg font-semibold">Software Engineer</h6>
        </div>
        <div>
          <p className="text-gray-300">
            I build accessible, precise, and visually refined web experiences
            with care and detail.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href="https://linkedin.com/in/ricardofpe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/ricardofpe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}
