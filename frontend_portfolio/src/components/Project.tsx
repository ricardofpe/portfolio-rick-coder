import Image from "next/image";
import oficinaDasFacas from "../../public/oficina_facas_site.png";
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
    <section className="flex flex-col mt-20 gap-6 px-4">
      <h6 className="font-semibold text-sm uppercase mb-6 text-gray-400 md:text-base lg:text-lg">
        PROJECTS
      </h6>
      <a
        href="https://oficinadasfacas.com.br/index"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center font-medium text-gray-100 hover:text-sky-300 transition-colors duration-200 md:text-lg lg:text-xl"
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

      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
        Developed a full-stack e-commerce application, "Oficina das Facas,"
        utilizing React for the frontend and C# with .NET for the backend. The
        platform features a sleek and modern design implemented with Tailwind
        CSS, providing a user-friendly experience for browsing and purchasing
        products.
      </p>

      <div className="flex mt-1 mb-1 flex-wrap gap-2 text-sm md:gap-3 lg:gap-4">
        {technologies.map((tech) => (
          <span
            key={tech.name}
            className="flex items-center border border-gray-700 border-opacity-20 bg-gradient-to-r from-gray-800 to-gray-600 text-gray-100 px-3 py-1 rounded-full inline-block md:px-4 md:py-1.5 lg:px-5 lg:py-2"
          >
            {tech.icon}
            <span>{tech.name}</span>
          </span>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <Image
          src={oficinaDasFacas}
          alt="Oficina das Facas Screenshot"
          width={400}
          height={200}
          className="shadow-md md:w-[600px] lg:w-[800px] md:h-auto"
        />
      </div>
    </section>
  );
};
