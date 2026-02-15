"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "../ui/fade-in";

export default function ProfessionalBackground() {
  const background = [
    {
      title: "Education",
      content:
        "Doctor of Psychology (PsyD) in Clinical Psychology. Specialization in Trauma and Anxiety disorders.",
    },
    {
      title: "Licensure",
      content:
        "Licensed Clinical Psychologist - California Board of Psychology. License #PSY12345 (Fictional).",
    },
    {
      title: "Approach & Training",
      content:
        "Integrative approach combining Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), and Mindfulness-Based Stress Reduction (MBSR).",
    },
  ];

  return (
    <section className="bg-muted py-16 md:py-24 px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <FadeIn fullWidth>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-center mb-10 tracking-tight">
            Professional Background
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} fullWidth>
          <Accordion
            type="single"
            collapsible
            className="w-full border-t border-foreground/20"
          >
            {background.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-foreground/20"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-foreground hover:no-underline py-5 transition-all font-serif">
                  {item.title}
                </AccordionTrigger>

                <AccordionContent className="text-[15px] md:text-lg text-foreground/80 leading-relaxed pb-6">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
