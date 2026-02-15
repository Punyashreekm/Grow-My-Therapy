"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import intro from "../../public/office1.jpeg";
import FadeIn from "../ui/fade-in";

export default function Intro() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full lg:min-h-[800px]  overflow-hidden">
      {/* Left Content Column */}
      <FadeIn direction="left" fullWidth className="h-full">
        <div className="bg-muted flex flex-col justify-between border-r border-foreground/10 h-full">
          {/* Main Text Area */}
          <div className="flex-grow flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-tight mb-10">
              Navigating anxiety & burnout.
            </h2>

            <div className="space-y-6 text-foreground/80 text-lg md:text-xl max-w-md leading-relaxed">
              <p>
                My work often focuses on anxiety, panic, trauma, and burnout.
                Clients frequently come to me feeling “functional” on the
                outside while quietly struggling with constant worry or tension.
              </p>
              <p>
                Therapy can become a space to slow down, reconnect, and develop
                more sustainable ways of living and working.
              </p>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="border-t border-foreground/10 py-8 w-full flex justify-center items-center">
            <button className="flex items-center gap-2 text-foreground text-xs font-bold tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </FadeIn>

      {/* Right Image Column */}
      <FadeIn direction="right" delay={0.2} fullWidth className="h-full">
        <div className="h-[400px] lg:h-full lg:max-h-[800px] overflow-hidden relative">
          <Image
            src={intro}
            alt="Coffee, lilacs, and a notebook on a bed"
            fill
            className="object-cover"
          />
        </div>
      </FadeIn>
    </section>
  );
}
