import BackgroungImg from "./background"
import Image from "next/image";
import Header from "./Header/header";
import About from "./Hero/about";
import Project from "./Hero/project";
import ProjectNext from "./Hero/projectNext";
import Footer from "./Footer/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroungImg />
      <Header />
      <About />
      <Project />
      <ProjectNext />
      <Footer />
    </main>
  );
}
