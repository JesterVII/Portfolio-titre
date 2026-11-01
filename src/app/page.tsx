//component
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import { Experiences } from "./components/Experiences";
import { ShowCase } from "./components/ShowCase";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main id="about">
      <Header />
      <Spacing size="md" />
      <Hero />
      <div id="exp"></div>
      <Spacing size="lg" />
      <Experiences />
      <div id="projets"></div>
      <Spacing size="lg" />
      <ShowCase />
      <Spacing size="lg" />
      <Contact />
      <Spacing size="lg" />
    </main>
  );
}
