import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MoveRight } from "lucide-react";

export default function GameSection() {
  return (
    <section className="bg-[#F8F0DD] text-stone-900  py-20 px-6 md:px-12 lg:px-20  flex flex-col justify-center font-sans">
      <div className="container ">
        {/* Header Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end mb-12">
          <div>
            <span className="text-[#E97443] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              GAMES
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-950">
              Play the Universe
            </h2>
          </div>
          <div>
            <p className="text-stone-600 text-base md:text-lg max-w-md md:ml-auto leading-relaxed">
              The same thirteen symbols. Different rules, different moods,
              different depths. Every game is a new way in to the same world.
            </p>
          </div>
        </div>

        {/* Cards Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left BIG Card (univers1.jpeg) - Takes 2 columns */}
          <div className="lg:col-span-2 rounded-md min-h-[550px] flex flex-col justify-between relative overflow-hidden group shadow-xl">
            {/* Background Image */}
            <Image
              src="/images/univers1.jpeg" // Public folder এ রাখা ইমেজের পাথ
              alt="DoUndo: The Card Game Background"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Card Content */}
            <div className="p-8 md:p-12 mt-auto relative z-10 max-w-xl w-full">
              {/* Card Meta */}
              <div className="uppercase text-[#5EA3A3] text-xs font-bold tracking-widest mb-6">
                Strategy & Perception
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                DoUndo: The Card Game
              </h3>
              <p className="text-stone-200 text-sm md:text-base mb-6 leading-relaxed">
                The original game that started it all. Use your thirteen symbols
                to outread, outmaneuver, and outlast your opponent in a battle
                of archetypes.
              </p>
              <Link
                href="/explore-game"
                className="inline-flex items-center gap-2 text-[#E97443] text-xs font-bold tracking-widest uppercase hover:text-[#e97443]/80 transition-colors group/btn"
              >
                Explore the Game
                <MoveRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right SMALL Card (univers2.jpeg) - Takes 1 column */}
          <div className="rounded-md min-h-[420px] flex flex-col justify-between relative overflow-hidden group shadow-xl">
            {/* Background Image */}
            <Image
              src="/images/univers2.jpeg" // Public folder এ রাখা ইমেজের পাথ
              alt="The Myth Game Background"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Card Content */}
            <div className="p-8 mt-auto relative z-10 w-full h-full flex flex-col justify-between min-h-[420px]">
              {/* Top Badge Tag */}
              <div className="flex justify-between items-start w-full">
                <span className="uppercase text-[#5EA3A3] text-xs font-bold tracking-widest">
                  Next Chapter
                </span>
                <span className="bg-stone-900/80 backdrop-blur-sm text-[#5EA3A3] text-[10px] font-bold tracking-widest px-2 py-1 rounded uppercase border border-stone-700/50">
                  Coming 2026
                </span>
              </div>

              {/* Bottom Info */}
              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  The Myth Game
                </h3>
                <p className="text-stone-200 text-sm mb-6 leading-relaxed">
                  Weave stories using symbols as characters, conflicts, and
                  resolutions. A narrative game for 2-8 players. Coming next
                  year.
                </p>
                <Link
                  href="/join-waitlist"
                  className="inline-flex items-center gap-1 text-[#E97443] text-xs font-bold tracking-widest uppercase hover:text-[#e97443]/80 transition-colors group/btn"
                >
                  Join Waitlist
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
