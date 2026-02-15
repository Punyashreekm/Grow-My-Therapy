"use client";

import React from "react";
import Image from "next/image";
import specialties1 from "../../public/specialties_stone.png";
import specialties2 from "../../public/specialties_leaves.png";
import specialties3 from "../../public/specialties_tea.png";
import FadeIn from "../ui/fade-in";

export default function Specialties() {
  const specialties = [
    {
      title: "Anxiety",
      description:
        "For those who feel functional on the outside but quietly struggle with constant worry, tension, or a sense of always bracing for something to go wrong.",
      image: specialties1,
    },
    {
      title: "Trauma",
      description:
        " navigating the impact of earlier life experiences that continue to affect relationships, confidence, and your sense of safety in the world.",
      image: specialties2,
    },
    {
      title: "Burnout",
      description:
        "Supporting entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress and high internal pressure.",
      image: specialties3,
    },
  ];

  return (
    <section className="bg-background py-20 px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <FadeIn fullWidth>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground text-center mb-20 tracking-tight">
            My Focus Areas
          </h2>
        </FadeIn>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <FadeIn
              key={index}
              delay={index * 0.2}
              fullWidth
              className="h-full"
            >
              <div className="bg-card border border-border p-10 md:p-8 flex flex-col min-h-[500px] transition-all hover:shadow-md h-full rounded-sm">
                {/* Text Content */}
                <div className="flex-grow space-y-6">
                  <h3 className="text-2xl font-serif font-medium text-foreground tracking-tight">
                    {specialty.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-base">
                    {specialty.description}
                  </p>
                </div>

                {/* Large Circular Image at Bottom */}
                <div className="mt-12 flex justify-center">
                  <div className="relative w-56 h-56 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-background/50">
                    <Image
                      src={specialty.image}
                      alt={specialty.title}
                      fill
                      className="object-cover grayscale-[10%] contrast-[1.05]"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
