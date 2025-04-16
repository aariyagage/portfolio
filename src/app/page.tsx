"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import { TextReveal } from "@/components/magicui/text-reveal";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import DraggableLetters from "@/components/DraggableLetters";

export default function HomePage() {
  const items = [
    {
      title: "AI Cheat Sheet Generator",
      description: "Turn your notes into smart summaries in seconds.",
      header: <div className="w-full h-full bg-pink-100" />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Automated Proofreading",
      description: "Let AI fix grammar, tone, and structure instantly.",
      header: <div className="w-full h-full bg-purple-100" />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Smart Suggestions",
      description: "Your own writing assistant, powered by context.",
      header: (
        <div className="w-full h-full bg-gradient-to-r from-pink-300 to-purple-300" />
      ),
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Sentiment Analysis",
      description: "Gauge the emotion of any paragraph with a click.",
      header: <div className="w-full h-full bg-orange-100" />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      colSpan: "lg:col-span-2",
    },
    {
      title: "Text Summarization",
      description: "Feed it a PDF. Get a tweet-length takeaway.",
      header: <div className="w-full h-full bg-green-100" />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const words = ["Full-Stack Dev", "Designer", "AI Builder", "Creative Coder"];
  const heroRef = useRef(null);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero section */}
      <section
        ref={heroRef}
        className="relative z-10 flex flex-col items-center justify-center pt-24 pb-10 min-h-[100vh] overflow-hidden"
      >
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
    Actively Seeking Summer'25 Internships
  </p>
        <h1 className="text-7xl font-extrabold tracking-tight mb-4">
          Aariya Gage
        </h1>

        <FlipWords
          words={words}
          duration={1000}
          className="text-2xl font-medium text-neutral-500 dark:text-neutral-400 mb-6"
        />

        <div className="flex space-x-6 mb-6">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500 transition"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500 transition"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>

        {/* draggable alphabets inside hero */}
        <DraggableLetters containerRef={heroRef} />
      </section>

      {/* Grid section */}
      <section className="p-10 pt-0 -mt-50">
      <h2 className="text-3xl font-semibold text-center text-neutral-800 dark:text-white mb-10">
    explore my projects
  </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "rounded-xl border border-neutral-200 dark:border-white/[0.1] bg-white dark:bg-black shadow-md p-4 flex flex-col justify-between w-full h-[20rem] transition hover:shadow-xl",
                item.colSpan
              )}
            >
              <div className="flex flex-1 mb-4">{item.header}</div>
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <h3 className="font-bold text-lg text-neutral-800 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Text Reveal Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 text-center mt-[-5vh]">
        <TextReveal className="text-6xl sm:text-7xl md:text-8xl text-center">
          you've seen the tech. NOW, meet the human :)
        </TextReveal>
      </section>

      {/* Macbook Scroll (clean & closer) */}
      <section className="mt-[-40rem]">
        <MacbookScroll
          title={""}
          badge={null}
          src="/linear.webp"
          showGradient={false}
        />
      </section>
    </main>
  );
}
