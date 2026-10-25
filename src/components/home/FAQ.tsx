"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/shared/SectionHeading";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "How long does it take to build my website?",
    answer:
      "Most projects launch in 1–3 weeks, depending on the number of pages and features. After we talk, I'll give you a clear timeline in your plan, and I'll tell you early if anything could affect it. Faster delivery is possible for simple sites.",
  },
  {
    id: "item-2",
    question: "How much does it cost?",
    answer:
      "Every project is different, so I quote based on what you need: pages, features, and complexity. You get a fixed price in writing before any work starts, with no hidden fees.",
  },
  {
    id: "item-3",
    question: "What if I want changes while you're building?",
    answer:
      "Feedback is part of the process. Your quote includes 2 rounds of revisions, so we can fine-tune the design and content together. If you want to add new features beyond the agreed scope, I'll tell you the cost upfront so you can decide.",
  },
  {
    id: "item-4",
    question: "Do you offer support after launch?",
    answer:
      "Yes. Every project includes 180 days of free support for bug fixes and questions. After that, you can reach me for updates, new features, or maintenance whenever you need — either as one-off requests or a monthly plan.",
  },
  {
    id: "item-5",
    question: "What do I need to get started?",
    answer:
      "Just a conversation. Tell me about your business and goals, and I'll guide you through the rest. Having your logo, product photos, and content ready speeds things up.",
  },
  {
    id: "item-6",
    question: "How do payments work?",
    answer:
      "50% upfront to start, and the remaining 50% when the site is ready to launch.",
  },
];

const FAQ = () => {
  return (
    <div className="w-full">
      <SectionHeading title="FAQ" />

      {/* Subheading */}
      <p className="text-center text-lightGrey/70 text-sm md:text-base mb-10 md:mb-12 -mt-4">
        Your common questions and answers.
      </p>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-cardBg/30 backdrop-blur-sm border border-mutedGrey/20 rounded-2xl px-6 overflow-hidden data-[state=open]:bg-cardBg/50 data-[state=open]:border-classicGold/30 transition-all duration-300 group"
            >
              <AccordionTrigger className="text-offWhite font-medium text-sm md:text-base text-left hover:text-classicGold hover:no-underline py-5 [&>svg]:text-classicGold [&>svg]:shrink-0 transition-colors duration-200">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lightGrey/80 leading-relaxed text-sm pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
