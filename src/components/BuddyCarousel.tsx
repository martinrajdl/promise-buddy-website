"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/*
 * Buddy Carousel Component
 *
 * Wide carousel showing all 9 buddies at once.
 * Smooth highlight transition without layout shifts.
 * Uses opacity and subtle effects instead of size changes.
 */

const buddies = [
  { name: "Red Panda", src: "/images_promise_buddy/red_panda.png" },
  { name: "Quokka", src: "/images_promise_buddy/quokka.png" },
  { name: "Koala", src: "/images_promise_buddy/koala.png" },
  { name: "Cat", src: "/images_promise_buddy/cat.png" },
  { name: "Dog", src: "/images_promise_buddy/dog.png" },
  { name: "Bear", src: "/images_promise_buddy/bear.png" },
  { name: "Axolotl", src: "/images_promise_buddy/axolotl.png" },
  { name: "Narwhal", src: "/images_promise_buddy/narhwhal.png" },
  { name: "Ghost", src: "/images_promise_buddy/ghost.png" },
];

export default function BuddyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate highlight every 2.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % buddies.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="w-full py-12 md:py-16 bg-blush"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Meet your potential buddies"
    >
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-base md:text-lg text-text-secondary mb-8">
          Meet your potential buddies
        </p>

        {/* All buddies in a fixed-size grid - no layout shifts */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 lg:gap-6">
          {buddies.map((buddy, idx) => {
            const isActive = idx === activeIndex;

            return (
              <button
                key={buddy.name}
                onClick={() => setActiveIndex(idx)}
                className="flex flex-col items-center"
              >
                {/* Fixed size container to prevent layout shifts */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative">
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-500 ease-out ${
                      isActive
                        ? "bg-warm-white shadow-md"
                        : "bg-transparent"
                    }`}
                  />
                  <Image
                    src={buddy.src}
                    alt={buddy.name}
                    width={96}
                    height={96}
                    className={`w-full h-full relative z-10 transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                  />
                </div>
                <p
                  className={`text-center mt-2 text-xs sm:text-sm transition-all duration-500 ease-out ${
                    isActive
                      ? "text-text-primary font-medium"
                      : "text-text-muted"
                  }`}
                >
                  {buddy.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
