import React from "react";

export default function GameRulesSection() {
  const steps = [
    {
      num: "01",
      title: "Setup",
      description:
        "Shuffle 72 cards. Deal four to each player, face down. The rest become the draw deck. Lay the fabric board between you. One player begins.",
    },
    {
      num: "02",
      title: "Three Layers",
      description:
        "The board holds 16 spaces, stacked up to three cards deep. A layer must be fully filled before the next one begins, and a covered card is locked for good.",
    },
    {
      num: "03",
      title: "Each Turn",
      description:
        "Draw one. Place, or swap with a top card and displace it. End with four cards in hand. You may only take one action: draw, call Win, or call Face-Off.",
    },
    {
      num: "04",
      title: "Two Ways to Win",
      description:
        "Match your four-card hand to a full row or column of top cards — order doesn't matter, duplicates must match. Or gamble: call Face-Off and reveal. Two shared symbols wins the round for two.",
    },
  ];

  return (
    <section className=" text-[#1A1A1A] px-6 py-16 md:py-24 container  font-sans">
      {/* Top Tagline */}
      <div className="mb-6">
        <p className="text-[11px] font-bold tracking-[0.2em] text-[#5C6B73] uppercase">
          How to Play &bull; 20 Minutes Per Round
        </p>
      </div>

      {/* Main Heading */}
      <div className="max-w-4xl mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
          The rules fit on one page. The game unfolds over a hundred.
        </h2>
      </div>

      {/* 4-Column Grid with Editorial Border Dividers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#EAE6DF]">
        {steps.map((step, index) => (
          <div
            key={step.num}
            className={`pt-8 pb-8 md:pb-12 flex flex-col space-y-4 lg:px-6 first:pl-0 last:pr-0
              /* Horizontal dividers for mobile, vertical dividers for desktop matching image_91d15f.png */
              border-b md:border-b-0 border-[#EAE6DF] 
              ${index % 2 !== 0 ? "md:pl-6" : "md:pr-6"}
              ${index > 0 ? "lg:border-l lg:border-[#EAE6DF]" : ""}
            `}
          >
            {/* Step Number */}
            <span className="text-xs font-semibold tracking-wider text-[#9C9A96]">
              {step.num}
            </span>

            {/* Step Title */}
            <h3 className="text-2xl font-normal tracking-tight text-[#1A1A1A]">
              {step.title}
            </h3>

            {/* Step Description */}
            <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed font-light font-sans tracking-wide">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}