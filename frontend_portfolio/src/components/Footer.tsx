export default function Footer() {
  return (
    <footer className="mt-20 mb-10 px-4 flex justify-center lg:mt-24">
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
