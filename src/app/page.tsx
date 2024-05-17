import About from "@/components/about";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main
      className="relative flex flex-1  min-h-screen z-10 p-10 flex-col"
      style={{
        backgroundImage: "url('background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 -z-10" />

      <Header />
      <HeroSection />
      <About />
      <Projects />
    </main>
  );
}
