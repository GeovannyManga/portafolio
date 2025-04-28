// components/Portfolio.tsx
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Mirador del Parque Tayrona Hostel",
    description: "Página web de un hostal dentro del Parque Tayrona.",
    image: "/mirador.webp",
    link: "https://www.miradordelparquetayrona.com/",
  },
  {
    title: "Eden Tayrona Park",
    description: "Sitio web relacionado con experiencias en el Tayrona.",
    image: "/eden.webp",
    link: "https://edentayronapark.com/",
  },
  {
    title: "Promissory Note",
    description: "Aplicación de gestión de pagarés para institución académica.",
    image: "/promissory.webp",
    link: "https://pagare-cae.vercel.app/",
  },
  {
    title: "Code As Services Landing",
    description: "Landing page para servicios de desarrollo en Panamá.",
    image: "/codeas.webp",
    link: "https://code-as-services.netlify.app/",
  },
  {
    title: "IPS Miguel Arcángel",
    description: "Desarrollo de la página web para el centro médico IPS Miguel Arcángel.",
    image: "/ips.webp",
    link: "https://ipsmiguelarcangel.com/",
  },
  {
    title: "Proyecto Portafolio Marketing Richard Dangound",
    description: "Portafolio de marketing digital para Richard Dangound.",
    image: "/richard.webp",
    link: "https://rchard-dangoud.netlify.app/",
  },
  {
    title: "AutoCommit",
    description: "Automatización de commits de proyectos con Python.",
    image: "/autocommit.webp",
    link: "https://github.com/GeovannyManga/Commit-App",
  },
  {
    title: "Server NovaCode Solutions",
    description: "Servidor backend para NovaCode Solutions.",
    image: "/server.webp",
    link: "https://github.com/GeovannyManga/Server-NovaCode-Solutions",
  },
  {
    title: "NovaCode Solutions",
    description: "Web corporativa de NovaCode Solutions.",
    image: "/novacode.webp",
    link: "https://github.com/GeovannyManga/NovaCode-Solutions",
  },
];

export default function Portfolio() {
  return (
    <div id="trabajo" className="w-full bg-gray-50 min-h-screen pb-20">
      <h2 className="text-6xl justify-center flex pt-48 font-bold text-gray-700">
        Trabajos
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-8 mt-16">
        {projects.map((project, index) => (
          <a
            aria-label="link"
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative w-full h-52">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-purple-700 mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-gray-600 text-center text-lg">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
