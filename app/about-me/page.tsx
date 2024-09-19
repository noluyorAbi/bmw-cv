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
          Meine zweite Webseite:{" "}
          <a
            href="https://myuninotes.com/"
            className="text-blue-500 underline hover:text-blue-700"
          >
            myuninotes
          </a>
        </span>{" "}
        <ul className="list-disc ml-5 sm:ml-8 lg:ml-10 font-helvetia text-pretty *:mt-2">
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Erstellung:
            </span>{" "}
            Während meines Informatikstudiums (4. Semester) als Weiterentwicklung von hustleswt
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Verbesserungen:
            </span>{" "}
            Basierend auf den Erfahrungen mit hustleswt habe ich eine Lösung mit einer
            Suchfunktion und strukturierten Links integriert, um den Nutzern das schnelle
            Auffinden von Dateien und Themen zu ermöglichen. Ich habe bewusst auf UI-Spielereien
            verzichtet, um eine bessere User Experience (UX) zu schaffen.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Kommentarfunktion:
            </span>{" "}
            Ich habe eine Kommentarfunktion hinzugefügt, damit Studierende sich gegenseitig bei
            Lösungen und Erklärungen unterstützen können.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Ziel:
            </span>{" "}
            Erklärungen und Notizen für IT-Themen in klarer und verständlicher Weise für
            Kommilitonen bereitzustellen.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Verfügbarkeit:
            </span>{" "}
            Responsives Design für den Zugriff von jedem Gerät und überall.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Ergebnisse:
            </span>{" "}
            Die Mühe, die Seite mit qualitativ hochwertigem Inhalt und guter Struktur zu pflegen,
            hat sich bemerkbar gemacht: Über 584 aktive Nutzer, 11.322 Interaktionen und
            positives Feedback in Uni-Gruppen.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Relevanz für BMW Group:
            </span>{" "}
            Fähigkeit, komplexe IT-Themen verständlich zu kommunizieren und an die Bedürfnisse von IT- und Nicht-IT-Anwendern anzupassen, dabei kreative Lösungen zu entwickeln und kontinuierlich durch Selbstweiterentwicklung zu optimieren.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Technologien:
            </span>{" "}
            Obsidian MD, Quartz, CSS, TypeScript, TSX
          </li>
        </ul>
      </p>


      <div className="carousel w-full rounded-xl mt-8">
        <div id="item1" className="carousel-item w-full">
          <img
            src="Studying made easier. Screenshot (2).svg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="Datenbanksysteme (DBS) Screenshot.svg"
            
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="RNVS-Blatt-06 Screenshot.svg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="RNVS-Blatt-00 Screenshot.svg"
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

const Powerpoint = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Neues Ref für Video

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Setze Wiedergabegeschwindigkeit auf 2x
    }
  }, []);

  return (
    <div
      key={"powerpoint-content"}
      className="mb-4 rounded-3xl bg-[#F5F5F7] p-4 md:p-14 dark:bg-neutral-800 text-balance text-left"
    >
      <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
        <span className="font-helvetia text-neutral-700 dark:text-neutral-200">
          Meine Seminarpräsentation über JWT:{" "}
          <a
            href="https://jwt-woad.vercel.app/"
            className="text-blue-500 underline hover:text-blue-700"
          >
            JSON Web Tokens
          </a>
        </span>{" "}
        <ul className="list-disc ml-5 sm:ml-8 lg:ml-10 font-helvetia text-pretty *:mt-2">
  <li className="mb-2 sm:mb-3 lg:mb-4">
    <span className="text-neutral-700 dark:text-neutral-200 font-bold">
      Erstellung:
    </span>{" "}
    Diese PowerPoint-Präsentation wurde für ein Seminar im 4. Semester über JWT (JSON Web Tokens)
    erstellt, um die Authentifizierung und Token-basierte Systeme zu erläutern.
  </li>
  <li className="mb-2 sm:mb-3 lg:mb-4">
    <span className="text-neutral-700 dark:text-neutral-200 font-bold">
      Design:
    </span>{" "}
    Modernes Design, anschauliche Grafiken und Animationen, die ohne überflüssigen Text
    auskommen, um den Fokus auf die Visualisierung der technischen Konzepte zu legen.
  </li>
  <li className="mb-2 sm:mb-3 lg:mb-4">
    <span className="text-neutral-700 dark:text-neutral-200 font-bold">
      Ziel:
    </span>{" "}
    Komplexe Themen wie Token-basierte Authentifizierung und Sicherheitsaspekte von JWT
    klar und verständlich zu vermitteln.
  </li>
  <li className="mb-2 sm:mb-3 lg:mb-4">
    <span className="text-neutral-700 dark:text-neutral-200 font-bold">
      Interaktivität:
    </span>{" "}
    Die Präsentation nutzt Animationen und Visualisierungen, um technische Prozesse wie
    die Token-Erstellung und -Verifizierung Schritt für Schritt zu veranschaulichen.
  </li>
  <li className="mb-2 sm:mb-3 lg:mb-4">
    <span className="text-neutral-700 dark:text-neutral-200 font-bold">
      Webseite:
    </span>{" "}
    Um meinen Kommilitonen "Learning by Doing" für JWT zu ermöglichen, habe ich eine Webseite
    erstellt, auf der sie JWTs selbst erzeugen, entschlüsseln und analysieren können. Zusätzlich
    bietet die Seite die Möglichkeit, den RSA-Verschlüsselungsalgorithmus zu testen und besser
    zu verstehen.
  </li>
  <li className="mb-2 sm:mb-3 lg:mb-4">
    <span className="text-neutral-700 dark:text-neutral-200 font-bold">
      Erfolg:
    </span>{" "}
    Dank des hervorragenden Vortrags und des begleitenden Papers habe ich das Seminar mit der Note 1.0 abgeschlossen. Unten finden Sie eine Auswahl von Folien aus der Präsentation.
  </li>
</ul>

      </p>



      <div className="carousel w-full rounded-xl mt-8">
  <div id="item1" className="carousel-item w-full">
    <img
      src="JWT-Verifizierung.gif"
      className="w-full"
    />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="Unsignierte-JWT.gif"
      className="w-full"
    />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="Signierte-JWT.gif"
      className="w-full"
    />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="TrioFolien.gif"
      className="w-full"
    />
  </div>
  <div id="item5" className="carousel-item w-full">
    <img
      src="JWE.gif"
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
    category: "Weniger Text, mehr Kommunikation",
    title: "Eine PowerPoint mit modernem Design und Animationen",
    src: "/powerpoint.png",
    content: <Powerpoint />,
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
