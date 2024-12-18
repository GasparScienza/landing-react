import React from 'react'
import Proyectos from '../Proyectos'
import Impresoras from '../../../img/Banner Impresoras.jpg'

function Body() {
  return (
    <>
      <div className='flex flex-col lg:p-20 md:p-10 sm:p-5 gap-10'>
        <div className='sm:pt-24 md:pt-20 lg:pt-10 pt-28'>
          <img src={Impresoras} alt="Banner" className='z-0 rounded-[50px]' />
        </div>

        <div id="nosotros" className='pb-10 pt-10 p-5 bg-gray-100 rounded-[50px] bg-opacity-80 '>
          <h1 className='text-center text-4xl pb-5'>Nosotros</h1>
          <p className='text-justify text-xl pl-10 pr-10  '>
            Somos Giuli y Gaspar, una pareja de estudiantes de
            ingeniería en sistemas interesados en el diseño e
            impresión 3D. Decidimos dar vida a este emprendimiento
            en Octubre de 2020 como una oportunidad para solventar
            nuestros estudios, pero también como un espacio donde
            pudiéramos ofrecer soluciones a nuestros clientes expresando
            nuestra creatividad en cada pedido, ofreciendo detalles
            personalizados y trabajando con dedicación y esfuerzo para que
            queden satisfechos con lo que desean y necesitan.
          </p>
        </div>

        <div id="proyectos" className='p-5 bg-gray-100 rounded-[50px] bg-opacity-80'>
          <Proyectos/>
        </div>
      </div>

    </>
  )
}

export default Body