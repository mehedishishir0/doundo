import React from "react";

export default function PressReactionsSection() {
  const reviews = [
    {
      quote: "The rarest thing in board games — a ruleset short enough to teach at dinner, deep enough to replay for a month.",
      author: "MEEPLE MONTHLY",
      meta: "Review, Spring 2025",
    },
    {
      quote: "Doundo does what the best two player games do: it makes silence between turns feel loud.",
      author: "THE STRATEGIST",
      meta: "Gift Guide",
    },
    {
      quote: "The components alone justify the price. That the game is also excellent is almost rude.",
      author: "SHELF OF GAMES",
      meta: "Editors pick",
    },
  ];

  return (
    <section className=" text-[#1A1A1A] px-6 py-16 md:py-24 container mx-auto font-sans">
      {/* Top Tagline */}
      <div className="mb-4">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#5C6B73] uppercase">
          PRESS & PLAY
        </p>
      </div>

      {/* Heading matching layout from image_926769.png */}
      <div className="max-w-2xl mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.15] text-[#1A1A1A]">
          Early reactions from players and press.
        </h2>
      </div>

      {/* 3-Column Reviews Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#F4EFE6] rounded-md p-8 flex flex-col justify-between min-h-[260px] border border-[#EAE6DF]/40 shadow-sm"
          >
            {/* Top Quote Block */}
            <div className="space-y-6">
              {/* Teal Quotes icon indicator from image_926769.png */}
              <div className="text-2xl font-serif text-[#4A6B6C] font-bold tracking-tighter leading-none select-none">
                
              </div>
              <p className="text-base text-[#2E2E2E] font-light leading-relaxed tracking-wide">
                {item.quote}
              </p>
            </div>

            {/* Bottom Author Info */}
            <div className="pt-8 space-y-1">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#5C6B73] uppercase">
                {item.author}
              </h4>
              <p className="text-xs text-[#8A8A8A] font-light font-serif italic">
                {item.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}