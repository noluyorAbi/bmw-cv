"use client";
import React from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { HeroHighlight } from "../components/ui/hero-highlight";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div>
      <HeroHighlight>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mx-auto max-w-screen-xl px-4 text-center text-neutral-700 dark:text-white"
        >
          <h2 className="font-helvetia mt-5 text-xl font-bold text-neutral-800 sm:text-2xl md:text-5xl dark:text-neutral-200">
            Warum Sie auf mich zählen können.
          </h2>
          <Carousel items={cards} />
        </motion.div>
      </HeroHighlight>
    </div>
  );
}

const DummyContent = () => {
  return (
    <div
      key={"myuninotes-content"}
      className="mb-4 rounded-3xl bg-[#F5F5F7] p-4 md:p-14 dark:bg-neutral-800 text-balance text-left"
    >
      <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
        <span className="font-helvetia text-neutral-700 dark:text-neutral-200">
          Meine erste Webseite:{" "}
          <a
            href="https://hustle-swt.vercel.app/"
            className="text-blue-500 underline hover:text-blue-700"
          >
            hustle-swt
          </a>
        </span>{" "}
        <ul className="list-disc ml-5 font-helvetia text-pretty *:mt-2">
          <li>
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Erstellung:
            </span>{" "}
            Während meines Informatikstudiums
          </li>
          <li>
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Ziel:
            </span>{" "}
            Lösungen, Erklärungen und Notizen für Softwaretechnik in
            ansprechender und kreativer Form für Komillitonen bereitstellen
          </li>
          <li>
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Verfügbarkeit:
            </span>{" "}
            Online-Zugriff von überall auf komplexe IT-Themen für Studierende
            ermöglichen
          </li>
          <li>
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Unterstützung:
            </span>{" "}
            Lernprozess meiner Kommilitonen erleichtern
          </li>
          <li>
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Relevanz für BMW Group:
            </span>{" "}
            Fähigkeit, IT-Themen klar und verständlich zu vermitteln
          </li>
          <li>
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Motivation:
            </span>{" "}
            Leidenschaft für Wissensvermittlung und Schaffung leicht
            zugänglicher Plattformen
          </li>
          <li>
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Technologien:
            </span>{" "}
            Next.js, React, TypeScript, TailwindCSS und DaisyUI
          </li>
        </ul>
      </p>

      <div className="carousel w-full rounded-xl mt-8">
        <div id="item1" className="carousel-item w-full">
          <img
            src="hustle-swt.vercel.app_(HighRes Screenshot).png"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="hustle-swt.vercel.app_(HighRes Screenshot)(1).png"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="hustle-swt.vercel.app_(HighRes Screenshot) (2).png"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="hustle-swt.vercel.app_(HighRes Screenshot) (3).png"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

const data = [
  {
    category: "Der Beginn",
    title: "Meine erste Webseite zum Thema IT-Kommunikation",
    src: "https://i.postimg.cc/xYbTJgxH/hustle-sw-t-vercel-app-High-Res-Screenshot.png",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
];
