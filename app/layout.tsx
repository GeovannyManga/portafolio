import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Aquí configuramos la fuente Montserrat
const montserrat = Montserrat({
  variable: "--font-montserrat",  // Variable CSS para usarla globalmente
  subsets: ["latin"],  // Subconjuntos de caracteres, puedes agregar más si es necesario
});

export const metadata: Metadata = {
  title: "GeoDev Portafolio Web",
  description: "Portafolio Web de un Desarrollador (Programador) Frontend y Backend, de React, React Native, Tailwind, Next.js, Node.js, Express, Python, Go, SQL, NoSQL, PostgreSQL, Mongodb, Mongoose, Socket.io",
  verification: {
    google: "O1_T6dW1Hhj3k4UTlIesHu7Mt_cKFVqEM3r-CFCj9LI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-neutral-100`}>
        {children}
      </body>
    </html>
  );
}
