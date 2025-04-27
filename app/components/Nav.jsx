import React from 'react'

export default function Nav() {
  return (
    <div className='flex items-center justify-between bg-slate-950 h-20 w-full px-18'>
        <div className=''>
            <span className='font-montserrat text-4xl font-bold text-gray-800 text-white'>Geo</span>
            <span className='font-montserrat text-4xl font-black text-purple-700'>Dev</span>
        </div>
        <ul className='font-montserrat flex text-white items-center justify-evenly w-1/2 h-auto  font-medium'>
            <li>Sobre mi</li>
            <li>Servicios</li>
            <li>Trabajos</li>
            <li>Consulta</li>
            <li className='h-12 w-32 bg-black flex justify-center items-center bg-purple-900 rounded-lg'>Contáctame</li>
        </ul>
    </div>
  )
}
