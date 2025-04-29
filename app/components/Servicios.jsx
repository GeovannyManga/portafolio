import React from "react";

export default function Servicios() {
  const servicios = [
    {
      titulo: "Desarrollo de Páginas Web Profesionales",
      descripcion: "Diseño y construcción de sitios web modernos, adaptables y optimizados usando React, Next.js y Tailwind CSS.",
    },
    {
      titulo: "Aplicaciones Web Personalizadas",
      descripcion: "Desarrollo de plataformas web a medida con integración de funcionalidades dinámicas frontend y backend escalables.",
    },
    {
      titulo: "Desarrollo de Aplicaciones Móviles",
      descripcion: "Creación de apps móviles nativas multiplataforma con React Native, rápidas, modernas y adaptadas a Android e iOS.",
    },
    {
      titulo: "Desarrollo Backend y APIs",
      descripcion: "Diseño y construcción de APIs REST y GraphQL, gestión de bases de datos y backends seguros con Node.js y Express.",
    },
    {
      titulo: "Optimización y Mantenimiento Web y Móvil",
      descripcion: "Mejoras de velocidad, seguridad, UX, actualizaciones tecnológicas y mantenimiento de proyectos existentes.",
    },
    {
      titulo: "Asesoría Técnica y Consultoría Digital",
      descripcion: "Análisis de proyectos, definición de estrategias tecnológicas, arquitectura de software y escalabilidad.",
    },
  ];

  return (
    <div id="servicios" className="w-full px-10 flex flex-col items-center pt-48">
      <span className="text-6xl font-bold text-gray-700 mb-16">Mis servicios</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transform transition-all duration-300 border-t-4 border-purple-600"
          >
            <h6 className="text-2xl font-bold text-purple-700 mb-4">{servicio.titulo}</h6>
            <p className="text-gray-600 font-bold">{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
