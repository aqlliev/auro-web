import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { ScrollWire } from "@/components/scroll-wire";
import { Study } from "@/components/study";

export default function Page() {
  return (
    <>
      <ScrollWire />
      <Header />
      <main id="content">
        <Hero />
        <About />
        <Experience />
        <Study />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
