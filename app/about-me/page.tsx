"use client";
import React, { useEffect, useRef } from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { HeroHighlight } from "../components/ui/hero-highlight";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const videoRef = useRef<HTMLVideoElement>(null); // Typ für HTML-Video-Element

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Set playback speed to 2x
    }
  }, []);

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
          <h2 className="font-helvetia mt-10 text-xl font-bold text-neutral-800 sm:text-2xl md:text-5xl dark:text-neutral-200 select-none">
            Warum Sie auf mich zählen können.
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-3xl md:mt-5 text-neutral-600 dark:text-neutral-300 select-none">
            Meine Projekte und Erfahrungen
          </p>
          <Carousel items={cards} />
        </motion.div>
      </HeroHighlight>
    </div>
  );
}

const HustleSWT = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Neues Ref für Video

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Setze Wiedergabegeschwindigkeit auf 2x
    }
  }, []);

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
        <ul className="list-disc ml-5 sm:ml-8 lg:ml-10 font-helvetia text-pretty *:mt-2">
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Erstellung:
            </span>{" "}
            Während meines Informatikstudiums (3.Semeseter)
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Ziel:
            </span>{" "}
            Lösungen, Erklärungen und Notizen für Softwaretechnik in
            ansprechender und kreativer Form für Kommilitonen bereitstellen
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Verfügbarkeit:
            </span>{" "}
            Online-Zugriff von überall und jedem Gerät aus durch responsivem
            Design
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Unterstützung:
            </span>{" "}
            Lernprozess meiner Kommilitonen erleichtern
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Relevanz für BMW Group:
            </span>{" "}
            Fähigkeit, IT-Themen klar und verständlich zu vermitteln
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Motivation:
            </span>{" "}
            Leidenschaft für Wissensvermittlung und Schaffung leicht
            zugänglicher Plattformen
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Technologien:
            </span>{" "}
            Next.js, React, TypeScript, TailwindCSS und DaisyUI
          </li>
        </ul>
      </p>

      <div className="spect-square">
        <video
          ref={videoRef}
          src="2024-09-19 01-40-55.mp4"
          className="w-full rounded-2xl mt-8"
          controls
          autoPlay
        />
      </div>

      <div className="carousel w-full rounded-xl mt-8">
        <div id="item1" className="carousel-item w-full">
          <video
            src="2024-09-19 02-04-43.mp4"
            className="w-full"
            controls
            autoPlay
            ref={videoRef}
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
        <div id="item5" className="carousel-item w-full">
          <img
            src="hustle-swt.vercel.app_(HighRes Screenshot).png"
            className="w-full"
          />{" "}
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
        <a href="#item5" className="btn btn-xs">
          5
        </a>
      </div>
    </div>
  );
};

const MyUniNotes = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Neues Ref für Video

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Setze Wiedergabegeschwindigkeit auf 2x
    }
  }, []);

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
        <ul className="list-disc ml-5 sm:ml-8 lg:ml-10 font-helvetia text-pretty *:mt-2">
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Erstellung:
            </span>{" "}
            Während meines Informatikstudiums (3.Semeseter)
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Ziel:
            </span>{" "}
            Lösungen, Erklärungen und Notizen für Softwaretechnik in
            ansprechender und kreativer Form für Kommilitonen bereitstellen
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Verfügbarkeit:
            </span>{" "}
            Online-Zugriff von überall und jedem Gerät aus durch responsivem
            Design
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Unterstützung:
            </span>{" "}
            Lernprozess meiner Kommilitonen erleichtern
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Relevanz für BMW Group:
            </span>{" "}
            Fähigkeit, IT-Themen klar und verständlich zu vermitteln
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Motivation:
            </span>{" "}
            Leidenschaft für Wissensvermittlung und Schaffung leicht
            zugänglicher Plattformen
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Technologien:
            </span>{" "}
            Next.js, React, TypeScript, TailwindCSS und DaisyUI
          </li>
        </ul>
      </p>

      <div className="spect-square">
        <video
          ref={videoRef}
          src="2024-09-19 01-40-55.mp4"
          className="w-full rounded-2xl mt-8"
          controls
          autoPlay
        />
      </div>

      <div className="carousel w-full rounded-xl mt-8">
        <div id="item1" className="carousel-item w-full">
          <video
            src="2024-09-19 02-04-43.mp4"
            className="w-full"
            controls
            autoPlay
            ref={videoRef}
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
        <div id="item5" className="carousel-item w-full">
          <img
            src="hustle-swt.vercel.app_(HighRes Screenshot).png"
            className="w-full"
          />{" "}
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
        <a href="#item5" className="btn btn-xs">
          5
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
    content: <HustleSWT />,
  },
  {
    category: "Die Weiterentwicklung",
    title: "Ich habe dazu gelernt und meine Webseite verbessert",
    src: "/MyUniNotes (2).png",
    content: <MyUniNotes />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <HustleSWT />,
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <HustleSWT />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <HustleSWT />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <HustleSWT />,
  },
];
