import React from "react";

export default function RightToLeftMarquee() {
  const words = [
    "Ares", "Shiva", "Gaia", "Shaman", "Enki", 
    "Hera", "Mitra", "Ahura", "Asgard", "Titan", "Laozi", "Setna", "Zigi"
  ];

  const repeatedWords = [...words, ...words, ...words];

  return (
    <div className="w-full overflow-hidden bg-[#FCF8EF] py-6 border-y border-stone-200">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-right-to-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: scroll-right-to-left 25s linear infinite;
        }
      `}} />

      <div className="relative flex w-full">
        <div className="flex items-center space-x-12 whitespace-nowrap animate-marquee-left">
          {repeatedWords.map((word, index) => (
            <span
              key={index}
              className="text-stone-800 text-sm md:text-base font-semibold tracking-[0.2em] uppercase font-sans selection:bg-transparent"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}