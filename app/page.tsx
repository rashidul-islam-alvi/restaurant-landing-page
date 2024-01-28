import Featured from "@/components/home-featured";
import Hero from "@/components/home-hero";
import HeroSweetTangy from "@/components/home-hero-sweet-tangy";
import ViewMenu from "@/components/home-hero-view-menu";
import NewsLetter from "@/components/home-newsletter";
import ReadTheirStory from "@/components/home-read-their-story";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroSweetTangy />
      <Featured />
      <ViewMenu />
      <ReadTheirStory />
      <NewsLetter />
    </main>
  );
}
