// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Redes Sociales */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Redes sociales</h3>
          <p className="text-gray-400 mb-2">
            Auténtico e innovador
          </p>
          <p className="text-gray-400 mb-6">
            Desarrollo lo que necesitas, con un enfoque en usabilidad y rendimiento
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a aria-label="link facebook" href="https://www.facebook.com/profile.php?id=61575495013895" target="_blank" className="text-3xl text-gray-400 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a aria-label="link" href="#" className="text-3xl text-gray-400 hover:text-white transition">
              <FaInstagram />
            </a>
            <a aria-label="link" href="#" className="text-3xl text-gray-400 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contacto</h3>
          <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400 mb-4">
            <FaPhoneAlt />
            <span>+57 3114259002</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400 mb-6">
            <FaEnvelope />
            <span>geovannyx.casimirom@gmail.com</span>
          </div>
          <div className="flex justify-center md:justify-start">
            <a aria-label="link whatsapp" href="https://wa.me/573114259002" className="flex items-center gap-2 border border-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition">
              <FaEnvelope className="text-xl" />
              Escríbeme
            </a>
          </div>
        </div>

        {/* Mis Servicios */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Mis Servicios</h3>
          <ul className="text-gray-400 space-y-4">
            <li>Desarrollo web</li>
            <li>Desarrollo móvil</li>
            <li>Desarrollo backend</li>
            <li>Consultoria de software</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
