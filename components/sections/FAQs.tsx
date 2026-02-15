"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import faqImage from "../../public/faq_vase.png";
import FadeIn from "../ui/fade-in";

export default function FAQs() {
  const faqs = [
    {
      question: "Do you offer online therapy?",
      answer:
        "Yes, I offer secure telehealth sessions for clients located throughout California.",
    },
    {
      question: "Do you take insurance?",
      answer:
        "I am an out-of-network provider. I can provide a superbill for you to submit to your insurance for potential reimbursement.",
    },
    {
      question: "How long are sessions?",
      answer:
        "Standard individual therapy sessions are 50 minutes. Longer sessions may be available upon request.",
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Arched Image */}
        <div className="flex justify-center lg:justify-start">
          <FadeIn direction="left" fullWidth>
            <div
              className="relative w-full max-w-[450px] aspect-[4/5] overflow-hidden"
              style={{ borderRadius: "500px 500px 0 0" }}
            >
              <Image
                src={faqImage}
                alt="Calming office detail"
                fill
                className="object-cover grayscale-[10%]"
              />
            </div>
          </FadeIn>
        </div>

        {/* Right Side: FAQs */}
        <div className="flex flex-col">
          <FadeIn direction="right" delay={0.2} fullWidth>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-12 tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="border-t border-foreground/20">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-foreground/20"
                  >
                    <AccordionTrigger className="flex items-center gap-6 py-6 hover:no-underline group text-left">
                      <span className="text-xl md:text-2xl font-serif text-foreground tracking-tight">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-foreground/80 leading-relaxed pb-8 font-sans">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
