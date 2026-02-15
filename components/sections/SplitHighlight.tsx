"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import splitHighlight from "../../public/split_nook.png";
import FadeIn from "../ui/fade-in";

export default function SplitHighlight() {
  const symptoms = [
    'Feeling "functional" but quietly struggling',
    "Constant worry or tension in the body",
    "Difficulty sleeping or relaxing",
    "A sense of bracing for things to go wrong",
    "Feeling disconnected from yourself",
  ];

  return (
    /* w-screen ensures it ignores parent padding and fills the viewport width */
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[700px] overflow-hidden">
      {/* Left Image Column - Optimized with Next.js Image */}
      <FadeIn direction="left" fullWidth className="h-full">
        <div className="relative h-[500px] lg:h-full w-full">
          <Image
            src={splitHighlight}
            alt="Person reflecting in a calm space"
            fill
            className="object-cover grayscale-[10%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </FadeIn>

      {/* Right Content Column */}
      <FadeIn direction="right" delay={0.2} fullWidth className="h-full">
        <div className="bg-muted flex flex-col justify-between h-full">
          {/* Main Text Content Area */}
          <div className="flex-grow flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-tight mb-10 tracking-tight">
              You don't have to carry this{" "}
              <em className="italic font-serif">alone</em>.
            </h2>

            <div className="space-y-8 text-foreground/80 max-w-lg font-sans">
              <p className="text-lg md:text-xl font-medium text-foreground">
                If these experiences feel familiar, there is a path forward:
              </p>

              <ul className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-[15px] md:text-lg"
                  >
                    <span className="text-primary text-xl leading-none">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[15px] md:text-lg leading-relaxed pt-4">
                Therapy works best when you feel respected, understood, and
                actively involved. My goal is to help you develop insight,
                resilience, and a stronger relationship with yourself.
              </p>
            </div>
          </div>

          {/* Bottom Call to Action Footer */}
          <div className="border-t border-foreground/10 py-10 w-full flex justify-center items-center bg-muted">
            <button className="flex items-center gap-2 text-foreground text-xs font-bold tracking-[0.2em] uppercase hover:opacity-60 transition-opacity group">
              Work with me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
