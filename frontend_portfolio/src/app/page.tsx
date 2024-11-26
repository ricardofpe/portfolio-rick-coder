import About from "@/components/About";
import { Experience } from "@/components/Experience";
import Header from "@/components/Header";
import { Project } from "@/components/Project";

export default function Home() {
  return (
    <div className="container container-wide">
      <Header />
      <About />
      <Experience />
      <Project />
    </div>
  );
}
