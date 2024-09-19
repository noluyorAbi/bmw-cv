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
            Während meines Informatikstudiums (4. Semester) als
            Weiterentwicklung von hustleswt
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Verbesserungen:
            </span>{" "}
            Basierend auf den Erfahrungen mit hustleswt habe ich eine Lösung mit
            einer Suchfunktion und strukturierten Links integriert, um den
            Nutzern das schnelle Auffinden von Dateien und Themen zu
            ermöglichen. Ich habe bewusst auf UI-Spielereien verzichtet, um eine
            bessere User Experience (UX) zu schaffen.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Kommentarfunktion:
            </span>{" "}
            Ich habe eine Kommentarfunktion hinzugefügt, damit Studierende sich
            gegenseitig bei Lösungen und Erklärungen unterstützen können.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Ziel:
            </span>{" "}
            Erklärungen und Notizen für IT-Themen in klarer und verständlicher
            Weise für Kommilitonen bereitzustellen.
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
            Die Mühe, die Seite mit qualitativ hochwertigem Inhalt und guter
            Struktur zu pflegen, hat sich bemerkbar gemacht: Über 584 aktive
            Nutzer, 11.322 Interaktionen und positives Feedback in Uni-Gruppen.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Relevanz für BMW Group:
            </span>{" "}
            Fähigkeit, komplexe IT-Themen verständlich zu kommunizieren und an
            die Bedürfnisse von IT- und Nicht-IT-Anwendern anzupassen, dabei
            kreative Lösungen zu entwickeln und kontinuierlich durch
            Selbstweiterentwicklung zu optimieren.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Technologien:
            </span>{" "}
            Obsidian MD, Quartz, CSS, TypeScript, TSX
          </li>
        </ul>
      </p>

      <div className=" w-full rounded-xl my-4">
        <img
          src="Analytics_Startseite Screenshot.png"
          className="w-full rounded-xl"
        />
      </div>

      <div className="carousel w-full rounded-xl mt-8">
        <div id="item1" className="carousel-item w-full">
          <img
            src="Studying made easier. Screenshot (2).svg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="Datenbanksysteme (DBS) Screenshot.svg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="RNVS-Blatt-06 Screenshot.svg" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="RNVS-Blatt-00 Screenshot.svg" className="w-full" />
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
            Diese PowerPoint-Präsentation wurde für ein Seminar im 4. Semester
            über JWT (JSON Web Tokens) erstellt, um die Authentifizierung und
            Token-basierte Systeme zu erläutern.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Design:
            </span>{" "}
            Modernes Design, anschauliche Grafiken und Animationen, die ohne
            überflüssigen Text auskommen, um den Fokus auf die Visualisierung
            der technischen Konzepte zu legen.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Ziel:
            </span>{" "}
            Komplexe Themen wie Token-basierte Authentifizierung und
            Sicherheitsaspekte von JWT klar und verständlich zu vermitteln.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Interaktivität:
            </span>{" "}
            Die Präsentation nutzt Animationen und Visualisierungen, um
            technische Prozesse wie die Token-Erstellung und -Verifizierung
            Schritt für Schritt zu veranschaulichen.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Webseite:
            </span>{" "}
            Um meinen Kommilitonen "Learning by Doing" für JWT zu ermöglichen,
            habe ich eine Webseite erstellt, auf der sie JWTs selbst erzeugen,
            entschlüsseln und analysieren können. Zusätzlich bietet die Seite
            die Möglichkeit, den RSA-Verschlüsselungsalgorithmus zu testen und
            besser zu verstehen.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Erfolg:
            </span>{" "}
            Dank des hervorragenden Vortrags und des begleitenden Papers habe
            ich das Seminar mit der Note 1.0 abgeschlossen. Unten finden Sie
            eine Auswahl von Folien aus der Präsentation.
          </li>
        </ul>
      </p>

      <div className="carousel w-full rounded-xl mt-8">
        <div id="item1" className="carousel-item w-full">
          <img src="JWT-Verifizierung.gif" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="Unsignierte-JWT.gif" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="Signierte-JWT.gif" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="TrioFolien.gif" className="w-full" />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img src="JWE.gif" className="w-full" />
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

const Berufserfahrung = () => {
  return (
    <>
      <div
        key={"berufserfahrung-content"}
        className="mb-4 rounded-3xl bg-[#F5F5F7] p-4 md:p-14 dark:bg-neutral-800 text-balance text-left"
      >
        <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
          <span className="font-helvetia text-neutral-700 dark:text-neutral-200">
            Meine Berufserfahrung als Junior Software Developer bei{" "}
            <a
              href="https://titanom.com"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Titanom Technologies GmbH
            </a>
          </span>{" "}
          <ul className="list-disc ml-5 sm:ml-8 lg:ml-10 font-helvetia text-pretty *:mt-2">
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Zeitraum:
              </span>{" "}
              Von Mai 2023 bis April 2024 war ich als Junior Software Developer
              tätig und habe 20 Stunden pro Woche gearbeitet.
            </li>
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Aufgaben:
              </span>{" "}
              Zu meinen Hauptaufgaben gehörte die eigenständige Entwicklung von
              Features im Frontend und Backend in mehreren Kundenprojekten, die
              Unterstützung bei der Konzeption von Features sowie die
              Einarbeitung von Kollegen in Softwareprojekte.
            </li>
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Projekte:
              </span>{" "}
              In meiner Zeit arbeitete ich an innovativen KI-Produkten, die
              Lehrenden helfen, differenzierten Unterricht anzubieten und
              Lernenden mehr AHA-Momente zu ermöglichen.
            </li>
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Fähigkeiten:
              </span>{" "}
              Während meiner Tätigkeit habe ich umfangreiche Berufserfahrung im
              Bereich der Softwareentwicklung gesammelt und exzellente fachliche
              Kenntnisse erworben.
            </li>
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Erfolg:
              </span>{" "}
              Ich habe in meinen Projekten immer mit hoher Sorgfalt und
              Effizienz gearbeitet und konnte mein Team durch hervorragende
              Ergebnisse überzeugen. Zusätzlich habe ich ein hohes Maß an
              Selbstständigkeit gezeigt.
            </li>
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Gelernte Skills:
              </span>{" "}
              <ul className="ml-5 list-disc">
                <li>Arbeiten im Team</li>
                <li>Scrum</li>
                <li>Jira & Confluence</li>
                <li>Selbständiges Arbeiten und Verantwortungsbewusstsein</li>
                <li>Effiziente Umsetzung von Aufgaben</li>
              </ul>
            </li>
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Programmierskills:
              </span>{" "}
              <ul className="ml-5 list-disc">
                <li>Java, TypeScript, SQL</li>
                <li>HTML5, CSS, TailwindCSS</li>
                <li>React, Next.js, Supabase, Drizzle, Vercel</li>
              </ul>
            </li>
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Relevanz zur Stellenausschreibung:
              </span>{" "}
              In meiner Position als Junior Software Developer konnte ich nicht
              nur fundierte Kenntnisse in der Softwareentwicklung erwerben,
              sondern auch die Fähigkeit entwickeln, komplexe IT-Projekte
              effizient und selbstständig durchzuführen. Diese Erfahrung,
              kombiniert mit meiner technischen Expertise in Frontend- und
              Backend-Entwicklung sowie der Arbeit in agilen Teams (Scrum),
              deckt sich mit den Anforderungen der ausgeschriebenen Position.
              Besonders die Kommunikation und Abstimmung mit verschiedenen
              Stakeholdern, die für die erfolgreiche Umsetzung von Projekten
              unerlässlich ist, passt gut zu den Aufgaben im Bereich
              IT-Kommunikation.
            </li>
          </ul>
        </p>
      </div>

      <div
        key={"nachhilfe-content"}
        className="mb-4 rounded-3xl bg-[#F5F5F7] p-4 md:p-14 dark:bg-neutral-800 text-balance text-left"
      >
        <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
          <span className="font-helvetia text-neutral-700 dark:text-neutral-200">
            Meine Nachhilfetätigkeit als IT-Tutor für zwei Schüler
          </span>{" "}
          <ul className="list-disc ml-5 sm:ml-8 lg:ml-10 font-helvetia text-pretty *:mt-2">
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Schüler:
              </span>{" "}
              Ich gebe zwei Schülern Nachhilfe: Einer studiert BWL und behandelt
              ein Informatikmodul, die andere ist Abiturientin und wird in
              IT-Themen unterstützt.
            </li>
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Individualisierte MyUniNotes-Version:
              </span>{" "}
              Für beide Schüler habe ich jeweils eine maßgeschneiderte Version
              von MyUniNotes erstellt, die an ihre spezifischen Aufgaben und
              ihren Wissenstand angepasst ist:
              <ul className="ml-5 list-disc">
                <li>
                  <a
                    href="https://info-sigma.vercel.app/"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    MyUniNotes für den BWL-Studenten
                  </a>
                </li>
                <li>
                  <a
                    href="https://abitur-nachhilfe.vercel.app/"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    MyUniNotes für die Abiturientin
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Unterstützung im Lernprozess:
              </span>{" "}
              Diese personalisierten Plattformen helfen den Schülern, ihre
              Aufgaben besser zu verstehen und sich effizient auf Prüfungen
              vorzubereiten, indem ich komplexe IT-Themen für sie verständlich
              aufbereite.
            </li>
            <li className="mb-2 sm:mb-3 lg:mb-4">
              <span className="text-neutral-700 dark:text-neutral-200 font-bold">
                Relevanz für IT-Kommunikation:
              </span>{" "}
              Durch meine Nachhilfetätigkeit konnte ich wertvolle Erfahrungen
              sammeln, wie man komplexe IT-Themen verständlich und zugänglich
              erklärt. Besonders für diejenigen, die nicht aus dem IT-Bereich
              kommen, war es wichtig, die Inhalte so aufzubereiten, dass sie
              leicht nachvollziehbar sind. Diese Fähigkeit passt gut zu den
              Anforderungen der angestrebten Position, in der die Kommunikation
              von IT-Inhalten im Fokus steht.
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};

const Studium = () => {
  return (
    <>
    <div
      key={"studium-content"}
      className="mb-4 rounded-3xl bg-[#F5F5F7] p-4 md:p-14 dark:bg-neutral-800 text-balance text-left"
    >
      <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
        <span className="font-helvetia text-neutral-700 dark:text-neutral-200">
          Mein Studium: Informatik mit integriertem Anwendungsfach Statistik
        </span>{" "}
        <ul className="list-disc ml-5 sm:ml-8 lg:ml-10 font-helvetia text-pretty *:mt-2">
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Studiengang:
            </span>{" "}
            Ich studiere seit 2022 an der Ludwig-Maximilians-Universität München im Fachbereich Informatik mit integriertem Anwendungsfach Statistik.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Semester und ECTS:
            </span>{" "}
            Ich habe das 4. Semester im Sommersemester 2024 erfolgreich abgeschlossen und gehe mit voraussichtlich 120 ECTS in mein 5. Semester.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Aktueller Notenschnitt:
            </span>{" "}
            Mein aktueller Notenschnitt liegt bei 2.26.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Schwerpunkt:
            </span>{" "}
            Mein Studium kombiniert die theoretischen Grundlagen der Informatik mit der praktischen Anwendung statistischer Methoden. Diese interdisziplinäre Ausbildung ermöglicht es mir, datenbasierte Entscheidungen zu treffen und komplexe IT-Probleme analytisch anzugehen.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Praktische Anwendungen:
            </span>{" "}
            In verschiedenen Projekten konnte ich sowohl Algorithmen als auch statistische Methoden anwenden. So habe ich unter anderem rekursive Traversal-Methoden für Binärbäume entwickelt und tiefere Einblicke in die Datenanalyse gewonnen.
          </li>
          <li className="mb-2 sm:mb-3 lg:mb-4">
            <span className="text-neutral-700 dark:text-neutral-200 font-bold">
              Zukunftsziel:
            </span>{" "}
            Nach meinem Bachelor habe ich fest vor, meinen Master in Informatik zu machen, um mein Wissen weiter zu vertiefen und mich auf spezialisierte IT-Bereiche zu fokussieren.
          </li>
        </ul>
      </p>
    </div>
    
    {/* openAIScientist Projekt */}
    <div
  key={"berufserfahrung-content"}
  className="mb-4 rounded-3xl bg-[#F5F5F7] p-4 md:p-14 dark:bg-neutral-800 text-balance text-left"
>
  <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">
    IT-Kommunikation auf der Überholspur: Meine Motivation für BMW
  </h3>
  <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
    Ich möchte mich zunächst einmal herzlich dafür bedanken, dass Sie sich die Zeit genommen haben, meine Bewerbung so weit zu lesen. Ich hoffe, ich konnte Ihnen einen guten Eindruck davon vermitteln, wie viel Leidenschaft ich für das Entwickeln und Umsetzen von IT-Projekten mitbringe. Wie Sie sicherlich bemerkt haben, macht es mir besonders viel Spaß, Webseiten zu kreieren, die nicht nur funktional sind, sondern auch echten Mehrwert für die Nutzer bieten – ob das nun diese Bewerbung selbst ist oder die vielen Plattformen, die ich für meine Kommilitonen und Nachhilfeschüler entwickelt habe.
    <br /><br />
    Ich bin ein sehr extrovertierter Mensch, der es liebt, mit Menschen zu interagieren. Besonders glücklich macht es mich, wenn ich durch meine Arbeit anderen helfen kann – sei es, indem ich komplexe IT-Themen verständlich aufbereite oder Lernplattformen erstelle, die den Lernprozess erleichtern. Gerade die Webseiten, die ich für meine Kommilitonen und Nachhilfeschüler entwickelt habe, zeigen, wie sehr mir daran gelegen ist, mein Wissen auf kreative und verständliche Weise weiterzugeben. Mir liegt es am Herzen, IT so zu vermitteln, dass auch diejenigen, die vielleicht weniger vertraut mit der Materie sind, sie verstehen und anwenden können.
    <br /><br />
    Durch meine Erfahrung in der Entwicklung von nutzerzentrierten IT-Projekten habe ich gelernt, sowohl kreative als auch technische Herausforderungen effektiv zu meistern. Ich freue mich besonders darauf, meine Kommunikationsfähigkeiten und technischen Kompetenzen in der IT-Kommunikation bei BMW weiter auszubauen.
    <br /><br />
    Als ich die Stellenanzeige für die Werkstudentenstelle in der IT-Kommunikation bei der BMW Group gesehen habe, wusste ich sofort, dass dies die perfekte Möglichkeit ist, meine Stärken und meine Begeisterung für IT und Kommunikation zu verbinden. Besonders motivierend war für mich die Teilnahme am StudentsDay 2024, wo ich viele Masterstudenten aus dem BMW Masterprogramm kennenlernen durfte. Diese Begegnungen haben mir nicht nur wertvolle Einblicke in die Unternehmenskultur von BMW gegeben, sondern auch meinen Wunsch verstärkt, Teil dieses dynamischen und innovativen Teams zu werden.
    <br /><br />
    Die BMW Group steht für Innovation, Teamwork und die Fähigkeit, komplexe technische Systeme für ihre Kunden zugänglich zu machen – genau diese Werte passen zu meinen eigenen beruflichen Zielen. Mit meiner Erfahrung in der Entwicklung und Kommunikation technischer Konzepte, gepaart mit meiner Leidenschaft für nutzerzentriertes Design, bin ich überzeugt, dass ich die BMW Group erfolgreich unterstützen kann.
    <br /><br />
    Aus diesen Gründen freue ich mich umso mehr, mich für die Werkstudentenstelle in der IT-Kommunikation zu bewerben, und hoffe, dass ich die Gelegenheit bekomme, meine Fähigkeiten und mein Engagement bei der BMW Group einzubringen.
  </p>
</div>

    </>
  );
};




const Ich = () => {
  return (
    <>
      
      <div className="flex justify-center items-center mb-6">
        <img
          src="/1712915185470 (1).jpeg"
          alt="Profilbild"
          className="w-44 h-44 rounded-full object-cover"
        />
      </div>
      
      <div
  key={"personal-content"}
  className="mb-4 rounded-3xl bg-[#F5F5F7] p-4 md:p-14 dark:bg-neutral-800 text-balance text-left"
>
  <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
    <span className="font-helvetia text-neutral-700 dark:text-neutral-200">
      Über mich: Persönliche Daten
    </span>{" "}
    <ul className="list-disc ml-5 sm:ml-8 lg:ml-10 font-helvetia text-pretty *:mt-2">
      <li className="mb-2 sm:mb-3 lg:mb-4">
        <span className="text-neutral-700 dark:text-neutral-200 font-bold">
          Name:
        </span>{" "}
        Alperen Adatepe
      </li>
      <li className="mb-2 sm:mb-3 lg:mb-4">
        <span className="text-neutral-700 dark:text-neutral-200 font-bold">
          Geburtsdatum:
        </span>{" "}
        16. Juni 2004
      </li>
      <li className="mb-2 sm:mb-3 lg:mb-4">
        <span className="text-neutral-700 dark:text-neutral-200 font-bold">
          E-Mail:
        </span>{" "}
        adatepe.alperen@campus.lmu.de
      </li>
      <li className="mb-2 sm:mb-3 lg:mb-4">
        <span className="text-neutral-700 dark:text-neutral-200 font-bold">
          Telefonnummer:
        </span>{" "}
        +49 01745201905
      </li>
      <li className="mb-2 sm:mb-3 lg:mb-4">
        <span className="text-neutral-700 dark:text-neutral-200 font-bold">
          LinkedIn:
        </span>{" "}
        <a
          href="https://linkedin.com/in/alperen-adatepe"
          className="text-blue-500 underline hover:text-blue-700"
        >
          linkedin.com/in/alperen-adatepe
        </a>
      </li>
      <li className="mb-2 sm:mb-3 lg:mb-4">
        <span className="text-neutral-700 dark:text-neutral-200 font-bold">
          GitHub:
        </span>{" "}
        <a
          href="https://github.com/noluyorAbi"
          className="text-blue-500 underline hover:text-blue-700"
        >
          github.com/noluyorAbi
        </a>
      </li>
    </ul>
  </p>

  <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400 mt-8">
    <span className="font-helvetia text-neutral-700 dark:text-neutral-200">
      Kernkompetenzen auf einen Blick
    </span>{" "}
    <ul className="list-disc ml-5 sm:ml-8 lg:ml-10 font-helvetia text-pretty *:mt-2">
      <li className="mb-2 sm:mb-3 lg:mb-4">
        <span className="text-neutral-700 dark:text-neutral-200 font-bold">
          IT-Kommunikation:
        </span>{" "}
        Erfahrung in der Aufbereitung komplexer IT-Themen für Nicht-IT-Anwender.
      </li>
      <li className="mb-2 sm:mb-3 lg:mb-4">
        <span className="text-neutral-700 dark:text-neutral-200 font-bold">
          Frontend- und Backend-Entwicklung:
        </span>{" "}
        Umfassende Kenntnisse in JavaScript, TypeScript, React, Next.js, HTML5, und CSS.
      </li>
      <li className="mb-2 sm:mb-3 lg:mb-4">
        <span className="text-neutral-700 dark:text-neutral-200 font-bold">
          Agiles Arbeiten:
        </span>{" "}
        Erfahrung mit Scrum, Jira & Confluence zur effizienten Projektumsetzung.
      </li>
      <li className="mb-2 sm:mb-3 lg:mb-4">
        <span className="text-neutral-700 dark:text-neutral-200 font-bold">
          Selbstständigkeit:
        </span>{" "}
        Hohe Eigeninitiative und Verantwortung bei der Umsetzung von Projekten.
      </li>
      <li className="mb-2 sm:mb-3 lg:mb-4">
        <span className="text-neutral-700 dark:text-neutral-200 font-bold">
          Kreativität:
        </span>{" "}
        Innovatives Denken und kreative Lösungsansätze, insbesondere bei der Gestaltung von nutzerorientierten IT-Plattformen.
      </li>
    </ul>
  </p>
</div>



      <div
  key={"berufserfahrung-content"}
  className="mb-4 rounded-3xl bg-[#F5F5F7] p-4 md:p-14 dark:bg-neutral-800 text-balance text-left"
      >
          <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">
          IT-Kommunikation auf der Überholspur: Meine Motivation für BMW  </h3>
  <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
    Ich möchte mich zunächst einmal herzlich dafür bedanken, dass Sie sich die Zeit genommen haben, meine Bewerbung so weit zu lesen. Ich hoffe, ich konnte Ihnen einen guten Eindruck davon vermitteln, wie viel Leidenschaft ich für das Entwickeln und Umsetzen von IT-Projekten mitbringe. Wie Sie sicherlich bemerkt haben, macht es mir besonders viel Spaß, Webseiten zu kreieren, die nicht nur funktional sind, sondern auch echten Mehrwert für die Nutzer bieten – ob das nun diese Bewerbung selbst ist oder die vielen Plattformen, die ich für meine Kommilitonen und Nachhilfeschüler entwickelt habe.
    <br /><br />
    Ich bin ein sehr extrovertierter Mensch, der es liebt, mit Menschen zu interagieren. Besonders glücklich macht es mich, wenn ich durch meine Arbeit anderen helfen kann – sei es, indem ich komplexe IT-Themen verständlich aufbereite oder Lernplattformen erstelle, die den Lernprozess erleichtern. Gerade die Webseiten, die ich für meine Kommilitonen und Nachhilfeschüler entwickelt habe, zeigen, wie sehr mir daran gelegen ist, mein Wissen auf kreative und verständliche Weise weiterzugeben. Mir liegt es am Herzen, IT so zu vermitteln, dass auch diejenigen, die vielleicht weniger vertraut mit der Materie sind, sie verstehen und anwenden können.
    <br /><br />
    Als ich die Stellenanzeige für die Werkstudentenstelle in der IT-Kommunikation bei der BMW Group gesehen habe, wusste ich sofort, dass dies die perfekte Möglichkeit ist, meine Stärken und meine Begeisterung für IT und Kommunikation zu verbinden. Besonders motivierend war für mich die Teilnahme am StudentsDay 2024, wo ich viele Masterstudenten aus dem BMW Masterprogramm kennenlernen durfte. Diese Begegnungen haben mir nicht nur wertvolle Einblicke in die Unternehmenskultur von BMW gegeben, sondern auch meinen Wunsch verstärkt, Teil dieses dynamischen und innovativen Teams zu werden.
    <br /><br />
    Aus diesen Gründen freue ich mich umso mehr, mich für die Werkstudentenstelle in der IT-Kommunikation zu bewerben, und hoffe, dass ich die Gelegenheit bekomme, meine Fähigkeiten und mein Engagement bei der BMW Group einzubringen.
  </p>
</div>




<div
  key={"nachhilfe-content"}
  className="mb-4 rounded-3xl bg-[#F5F5F7] p-4 md:p-14 dark:bg-neutral-800 text-balance text-left"
>
  <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">
    Wie jetzt? Schon durch?
  </h3>
  <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
    Normalerweise würde hier ein schicker „Call to Action“ stehen, der Sie freundlich auffordert, mich zu kontaktieren. Aber ich denke, nach dieser Seite haben Sie schon einen guten Eindruck von meiner Leidenschaft für IT und Kommunikation bekommen. <br /><br />
    Egal, wie es weitergeht – ich freue mich darauf, von Ihnen zu hören und meine Begeisterung bei der BMW Group einzubringen. <br /><br />
    Und wer weiß, vielleicht hatten Sie ja sogar genauso viel Spaß beim Durchklicken wie ich beim Erstellen dieser Seite!
  </p>
  <div className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400 italic mt-6">
    <span className="block text-center font-bold">
      "The only way to do great work is to love what you do."
    </span>
    <span className="block text-center mt-2">– Steve Jobs</span>
  </div>
</div>



    </>
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
    category: "Berufserfahrung",
    title: "Hands-on Erfahrung als Entwickler und Nachhilfelehrer",
    src: "/berufserfahrung.png",
    content: <Berufserfahrung />,
  },
  {
    category: "Akademische Laufbahn",
    title: "Informatik- und Statistik-Kenntnisse kombiniert: Mein Weg",
    src: "/unihut.png",
    content: <Studium />,
  },
  {
    category: "Über mich",
    title: "Meine Leidenschaft für Technologie und Kommunikation",
    src: "/me.png",
    content: <Ich />,
  },
];
