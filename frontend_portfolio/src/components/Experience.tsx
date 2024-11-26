export default function Experience() {
  return (
    <section className="flex flex-col mt-20 gap-3">
      <h6 className="font-semibold text-sm uppercase mb-6 text-gray-400">
        EXPERIENCE
      </h6>

      <span className="text-sm text-gray-500">2024 - PRESENT</span>

      <h6 className="font-medium text-gray-100">
        Systems Analysis and Development - Notorium Certificadora Digital
      </h6>

      <p className="text-gray-300">
        I develop systems to simplify user experience, integrating APIs and
        automating manual processes. My work focuses on creating efficient and
        user-friendly solutions. I strive to streamline workflows and improve
        overall productivity through well-designed and robust systems.
      </p>

      <div className="flex mt-4 flex-wrap gap-2 text-sm">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gradient-to-r from-gray-800 to-gray-600 text-gray-100 px-3 py-1 rounded-full inline-block"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

const technologies = ["React", "NodeJS", "Styled Components", "MongoDB"];
