import React from "react";
import Image from "next/image";
import "./styles/welcome.css"; // No era necesario el import vacío {}

export default function Welcome() {

  return (
    <div className="flex flex-col-reverse md:flex-row container px-4 md:px-8 mx-auto pb-8 pt-20">
      {/* Texto */}
      <div className="w-full lg:w-3/5 pt-10 md:pt-40">
        <div className="h-10 w-36 md:h-14 md:w-44 bg-purple-700 flex items-center justify-center rounded-md">
          <span className="text-white text-sm md:text-base font-medium cuadrito ">Hola, yo soy</span>
        </div>
        <h1 className="font-montserrat text-gray-900 text-4xl md:text-6xl font-bold mt-3 w-full">
          Geovanny Manga
        </h1>
        <p className="mt-4 font-semibold text-gray-700 text-base md:text-lg">
          Profesional en desarrollo web y aplicaciones móviles
        </p>
        <div className="flex flex-col sm:flex-row justify-start mt-8 gap-4">
          <a
            aria-label="link de descarga CV"
            className="flex h-12 px-6 items-center justify-center rounded-md font-semibold text-white bg-purple-700 hover:bg-purple-800 transition"
            href="/cv.pdf"
            download="Geovanny-CV.pdf"
          >
            Descargar CV
          </a>
          <a
            aria-label="link de servicios"
            className="flex h-12 px-6 items-center justify-center rounded-md font-semibold text-black border-2 border-gray-900 hover:bg-gray-100 transition"
            href="#servicios"
          >
            Servicios
          </a>
        </div>
      </div>

      {/* Imagen */}
      <div className="flex w-full md:w-2/5 items-center justify-center">
        <div className="rounded-full border-4 border-purple-700 h-64 w-64 md:h-[25rem] md:w-[25rem] overflow-hidden mt-10 md:mt-16">
          <Image
            className="object-cover ml-6"
            src="/foto.png"
            width={320}
            height={320}
            alt="Foto de Geovanny Manga"
          />
        </div>
      </div>
    </div>
  );
}
