"use client";

import Image from "next/image";

interface HerosProps {
  h2?: string;
  h3?: string;
  img?: string;
}

const Heros = ({ h2, h3, img }: HerosProps) => {
  const backgroundImage = img || "/heros.jpg";

  return (
    <section className="relative h-[95vh] py-12 md:py-16">
      {/* Optimized background image */}
      <Image
        src={backgroundImage}
        alt={h2 || "Hero background"}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={85}
      />

      {/* Optional overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4">
        {h2 && (
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-[48px]">
            {h2}
          </h2>
        )}
        {h3 && (
          <h3 className="mb-4 text-center text-xl text-primary md:text-[36px]">
            {h3}
          </h3>
        )}
      </div>
    </section>
  );
};

export default Heros;
