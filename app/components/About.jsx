'use client'
import React from "react";
import Image from "next/image";
import {} from "../components/styles/about.css";

export default function About() {
  return (
    <div id="about" className="w-full">
      {/* Título */}
      <span className="text-4xl sm:text-5xl md:text-6xl justify-center flex pt-24 sm:pt-32 font-bold text-gray-700">
        Sobre mí
      </span>

      {/* Contenido */}
      <div className="flex flex-col md:flex-row mx-6 sm:mx-10 md:mx-14 mt-10 md:mt-14 justify-around items-center gap-10">
        {/* Texto */}
        <div className="w-full md:w-1/2 text-justify font-semibold text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
          Soy <span className="text-gray-800 font-bold">Geovanny Manga</span>,
          desarrollador de páginas web, aplicaciones web y móviles.
          <br />
          Construyo soluciones modernas y escalables usando{" "}
          <span className="highlight">React</span>,{" "}
          <span className="highlight">Next.js</span>,{" "}
          <span className="highlight">Tailwind CSS</span> y{" "}
          <span className="highlight">React Native</span>, combinando diseño
          funcional y alto rendimiento.
          <br />
          Mi objetivo es ayudarte a llevar tu proyecto digital al siguiente
          nivel, con calidad, eficiencia y un enfoque humano en cada detalle.
        </div>

        {/* Imagen */}
        <div className="flex justify-center items-center">
          <Image src={"/persona.svg"} width={240} height={200} alt="foto" className="object-contain" />
        </div>
      </div>
    </div>
  );
}
