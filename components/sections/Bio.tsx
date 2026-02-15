"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import bioImage from "../../public/Dr. Maya Reynolds.png";
import bioImage2 from "../../public/office2.jpeg";
import FadeIn from "../ui/fade-in";

export default function Bio() {
  return (
    <section className="bg-secondary py-20 md:py-32 lg:py-40 px-8 md:px-16 lg:px-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
        {/* Text Content */}
        <FadeIn direction="left" fullWidth className="h-full">
          <div className="flex flex-col items-start space-y-12">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-foreground tracking-tight leading-[1.1]">
              Hi, I'm Dr. Maya Reynolds.
            </h2>

            <div className="space-y-6 text-foreground/80 text-lg md:text-xl leading-relaxed max-w-lg">
              <p>
                I’m a licensed clinical psychologist based in Santa Monica,
                California, offering therapy for adults who feel overwhelmed by
                anxiety, stress, or the lingering effects of past experiences.
              </p>
              <p>
                Many of the people I work with are high-achieving, thoughtful,
                and self-aware—but internally feel exhausted, stuck in
                overthinking, or emotionally on edge.
              </p>
            </div>

            <button className="border border-foreground px-10 py-4 flex items-center gap-3 text-foreground text-xs font-bold tracking-[0.25em] uppercase hover:bg-foreground hover:text-background transition-all duration-300 group rounded-sm">
              LEARN MORE ABOUT ME
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </FadeIn>

        {/* Overlapping Image Composition */}
        <FadeIn direction="right" delay={0.2} fullWidth className="h-full">
          <div className="relative w-full max-w-[550px] mx-auto lg:ml-auto">
            {/* Main Arched Image */}
            <div
              className="w-[85%] aspect-[4/5] overflow-hidden shadow-sm relative"
              style={{ borderRadius: "500px 500px 0 0" }}
            >
              <Image
                src={bioImage}
                alt="Dr. Maya Reynolds portrait"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Circle Image - Thick border creates the "cut-out" effect */}
            <div className="absolute -bottom-12 -right-6 w-[55%] aspect-square rounded-full overflow-hidden border-[15px] border-secondary shadow-lg">
              <Image
                src={bioImage2}
                alt="Therapy office detail"
                fill
                className="object-cover scale-110"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
