import { Background } from "@/components/background";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Learning } from "@/components/learning";

export default function Page() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <Background />
        <Learning />
        <Contact />
      </main>
    </>
  );
}
