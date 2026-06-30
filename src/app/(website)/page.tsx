import AboutSectionPixelPerfect from "@/components/shared/AboutSection";
import AnimatedGalaxySection from "@/components/shared/AnimatedGalaxySection";
import FAQ from "@/components/shared/FAQ";
import GameSection from "@/components/shared/GameSection";

import Hero from "@/components/shared/Hero";
import LeftToRightMarquee from "@/components/shared/LeftToRightMarquee";
import PantheonInteractiveSection from "@/components/shared/PantheonInteractiveSection";

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <LeftToRightMarquee/>
      <GameSection/>
      <AboutSectionPixelPerfect/>
      <PantheonInteractiveSection/>
      <AnimatedGalaxySection/>
      {/* <About /> */}
      {/* <Products /> */}
      {/* <GetInTouch /> */}
      <FAQ />
    </div>
  );
}
