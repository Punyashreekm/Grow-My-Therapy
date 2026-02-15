"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import hero from "../../public/Dr. Maya Reynolds.png";
import FadeIn from "../ui/fade-in";

export default function Hero() {
  return (
    <div className="bg-background font-sans">
      {/* Hero Section */}
      <section className="w-full pt-20 lg:pt-16 pb-20 md:px-16 overflow-hidden">
        <div className="w-full max-w-[1540px]  mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8 items-center">
          {/* Image Container with Custom Arch Mask */}
          <div className="relative flex justify-center lg:justify-start w-full">
            <FadeIn direction="right" delay={0.2} fullWidth>
              <div
                className="w-full lg:max-w-[650px] max-w-[200px] mx-auto lg:aspect-[4/6] aspect-[2/3] overflow-hidden relative"
                style={{
                  borderRadius: "500px 500px 0 0", // Creates the arch
                }}
              >
                <Image
                  src={hero}
                  alt="Dr. Maya Reynolds"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Text Content */}
          <div className="text-center flex flex-col items-center space-y-8">
            <FadeIn delay={0.4}>
              <h1 className="text-5xl md:text-7xl lg:text-[4.5rem] font-serif font-medium text-primary leading-[1.1] tracking-tight">
                Reclaim your calm, <br /> restore your resilience.
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-lg md:text-xl text-foreground/80 max-w-lg mx-auto">
                Grounded, evidence-based therapy for anxiety, trauma, and
                burnout in Santa Monica, CA.
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <button className="mt-4 bg-primary text-primary-foreground px-8 py-3.5 flex items-center gap-3 hover:bg-primary/90 transition-all duration-300 group tracking-widest text-xs font-bold rounded-sm">
                WORK WITH ME
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
