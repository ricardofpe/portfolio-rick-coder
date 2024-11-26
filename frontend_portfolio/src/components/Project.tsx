import Image from "next/image";
import oficinaDasFacas from "../../public/oficina_das_facas_site.png";
import { SiReact, SiDotnet, SiTailwindcss } from "react-icons/si";

export const Project: React.FC = () => {
  const technologies = [
    { icon: <SiReact className="mr-2" size={18} />, name: "React" },
    { icon: <SiDotnet className="mr-2" size={18} />, name: ".NET" },
    {
      icon: <SiTailwindcss className="mr-2" size={18} />,
      name: "Tailwind CSS",
    },
  ];

  return (
    <section className="flex flex-col mt-20 gap-3">
      <h6 className="font-semibold text-sm uppercase mb-6 text-gray-400">
        PROJECTS
      </h6>

      <a
        href="https://oficinadasfacas.com.br/index"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center font-medium text-gray-100 hover:text-gray-400 transition-colors duration-200"
      >
        Oficina das Facas: A Modern E-commerce Platform{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>

      <p className="text-gray-300">
        Developed a full-stack e-commerce application, "Oficina das Facas,"
        utilizing React for the frontend and C# with .NET for the backend. The
        platform features a sleek and modern design implemented with Tailwind
        CSS, providing a user-friendly experience for browsing and purchasing
        products.
      </p>

      <div className="flex mt-1 mb-1 flex-wrap gap-2 text-sm">
        {technologies.map((tech) => (
          <span
            key={tech.name}
            className="flex items-center border border-gray-700 border-opacity-20 bg-gradient-to-r from-gray-800 to-gray-600 text-gray-100 px-3 py-1 rounded-full inline-block"
          >
            {tech.icon}
            <span>{tech.name}</span>
          </span>
        ))}
      </div>

      <div className="w-full">
        <Image
          src={oficinaDasFacas}
          alt="Oficina das Facas Screenshot"
          width={200}
          className="shadow-md"
        />
      </div>
    </section>
  );
};
