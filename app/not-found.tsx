/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { BackgroundLines } from "./components/ui/background-lines";
import { useEffect, useRef } from "react";

function consoleEasterEgg() {
    console.log("\n\n");
    console.log(
      "%cHallo! 👋 Willkommen in der Konsole!",
      "color: #FFFFFF; background-color: #0079EA; font-size: 18px; font-family: Helvetica;",
    );
    console.log(
      "%cWie ich sehe, schauen Sie gerne unter die Haube. 🚗",
      "color: #FFF; background-color: #522DAB; font-size: 18px; font-family: Helvetica;",
    );
    console.log(
      "%cWarum selbst unter die Haube schauen, wenn ich bei einem persönlichen Gespräch alles über mich und die Seite erzählen kann?",
      "color: #FFFFFF; background-color: #F60502; font-size: 18px; font-family: Helvetica;",
    );
    console.log("\n\n");
    console.log(
      "%cIrgendwie kommen mir die oben verwendeten Hintergrundfarben bekannt vor. Ihnen auch?",
      "font-size: 18px; font-family: Helvetica;",
    );
    console.log(
      "%cNaja, wenn wir schon mal hier sind, kann ich erwähnen, dass der M4 CSL einer meiner Favoriten ist. Und Ihrer?",
      " font-size: 18px; font-family: Helvetica;",
    );
    console.log("\n\n");
  }

export default function NotFound() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      consoleEasterEgg();
      hasRun.current = true;
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
      <BackgroundLines className="flex w-full flex-col items-center justify-center px-4">
        <h2 className="relative z-20 text-balance select-none bg-gradient-to-b from-black to-white via-black dark:from-white dark:to-black dark:via-white bg-clip-text py-2 text-center font-sans text-3xl font-bold tracking-tight text-transparent transition-all delay-100 duration-150 ease-linear hover:scale-105 hover:cursor-default md:py-10 md:text-4xl lg:text-7xl">
          Scheint so, als hätten Sie sich verfahren.
        </h2>
        <p className="mx-auto max-w-xs text-center text-sm font-semibold text-gray-600 dark:text-gray-400 sm:max-w-md md:text-lg font-helvetia select-none">
          Diese URL führt in eine Sackgasse. <br /> Aber keine Sorge, der Weg
          zurück ist nicht weit.
        </p>
        <Link href="/">
          <button className="text-md mt-6 transform rounded-lg bg-gradient-to-r from-[#0079EA] via-[#522DAB] to-[#F60502] px-3 py-2 font-helvetia select-none text-white dark:text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl sm:mt-12 sm:px-5 md:text-lg">
            Zur Startseite
          </button>
        </Link>
      </BackgroundLines>
      <footer className="text-center text-sm max-w-80 md:max-w-full text-pretty text-gray-500 dark:text-gray-400 py-4 absolute bottom-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300">
        Diese Seite wurde von{" "}
        <Link
          href={"https://www.linkedin.com/in/alperen-adatepe/"}
          className="text-blue-500 hover:text-blue-600"
        >
          Alperen Adatepe
        </Link>{" "}
        erstellt.
      </footer>
    </div>
  );
}
