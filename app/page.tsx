import { Background } from "@/components/background";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Learning } from "@/components/learning";

export default function Page() {
  return (
    <main id="content">
      <Hero />
      <Background />
      <Learning />
      <Contact />
    </main>
  );
}
