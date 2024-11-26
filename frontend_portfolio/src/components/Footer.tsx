export default function Footer() {
  return (
    <footer className="mt-20 mb-10">
      <p className="text-gray-400">
        Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className=" text-white hover:text-sky-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </a>{" "}
        by yours truly. Built with{" "}
        <a
          href="https://nextjs.org/"
          className=" text-white hover:text-sky-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className=" text-white hover:text-sky-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className=" text-white hover:text-sky-300"
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
