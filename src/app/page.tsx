import { Navbar } from "@/ui/layouts/navbar";
import { Hero } from "@/ui/sections/hero";
import { About } from "@/ui/sections/about";
import { Projects } from "@/ui/sections/projects";
import { Skills } from "@/ui/sections/skills";

/**
 * Home Page
 * Main page composing all sections with smooth scroll
 */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

