'use client';
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleTouchStart = (event) => {
      setTouchStartX(event.touches[0].clientX);
    };
    const handleTouchEnd = (event) => {
      const touchEndX = event.changedTouches[0].clientX;
      const distance = touchEndX - touchStartX;

      if (distance > 50) {
        setIsMenuOpen(true);
      } else if (distance < -50) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStartX]);

  return (
    <>
      {/* NAVBAR */}
      <div className={`fixed w-full flex md:pr-18 transition-all duration-300 z-50 
        ${scrolled ? 'backdrop-blur-md bg-white/30 shadow-md' : 'bg-transparent'}
      `}>
        <div className='flex items-center justify-between h-20 w-full lg:w-1/2 px-6 md:px-18'>
          <div>
            <span className='font-montserrat text-4xl font-bold text-gray-800 text-black'>Geo</span>
            <span className='font-montserrat text-4xl font-black text-purple-700'>Dev</span>
          </div>
          <div className='block lg:hidden'>
            <button aria-label='menu hamburguesa' onClick={toggleMenu}>
              <GiHamburgerMenu size={30} />
            </button>
          </div>
        </div>

        <ul className='hidden md:visible font-montserrat flex text-black items-center justify-between w-1/2 h-auto font-medium lg:flex'>
          <li><a aria-label='link' href="#about">Sobre mi</a></li>
          <li><a aria-label='link' href="#servicios">Servicios</a></li>
          <li><a aria-label='link' href="#trabajo">Trabajos</a></li>
          <li><a aria-label='link' href="https://wa.me/573114259002">Consulta</a></li>
          <li className='h-12 w-32 bg-black text-white flex justify-center items-center bg-purple-900 rounded-lg'>
          <a aria-label='link' className='h-full w-full flex items-center justify-center' href="https://wa.me/573114259002">
              Contáctame
            </a>
          </li>
        </ul>
      </div>

      {/* SIDEBAR */}
      <div
        className={`fixed z-100 top-0 left-0 z-40 w-1/2 h-full bg-purple-900 text-white transition-transform duration-300
          ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}
        `}
      >
        <ul className='font-montserrat flex flex-col items-start justify-start p-6'>
          <li className='py-3'>
            <a onClick={toggleMenu} href="#about">Sobre mi</a>
          </li>
          <li className='py-3'>
            <a onClick={toggleMenu} href="#servicios">Servicios</a>
          </li>
          <li className='py-3'>
            <a onClick={toggleMenu} href="#trabajo">Trabajos</a>
          </li>
          <li className='py-3'><a href="https://wa.me/573114259002">Consulta</a></li>
          <li className='h-12 w-32 bg-black text-white flex justify-center items-center bg-purple-700 rounded-lg py-3 mt-6'>
            <a className='h-full w-full flex items-center justify-center' href="https://wa.me/573114259002">
              Contáctame
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
