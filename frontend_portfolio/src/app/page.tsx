import About from "@/components/About";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Project } from "@/components/Project";

export default function Home() {
  return (
    <div className="container container-wide">
      <div className="lg:flex lg:mt-10">
        <div className="lg:w-1/2 lg:pr-8">
          {" "}
          <Header />
        </div>
        <div className="lg:w-1/2">
          {" "}
          <About />
          <Experience />
          <Project />
          <Footer />
        </div>
      </div>
    </div>
  );
}
