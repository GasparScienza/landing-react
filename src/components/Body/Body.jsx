import React from 'react'
import Impresoras from '../../../img/Banner Impresoras.jpg'

function Body() {
  return (
    <>
      <div className='p-10'>
        <div className='pt-28  pb-10'>
          <img src={Impresoras} alt="Banner" className='z-0 rounded-[50px]' />  
        </div>
        
        <div  id="nosotros" className='p-10 bg-violet-100 rounded-[50px] bg-opacity-55'>
          <h1 className='text-center text-5xl pb-10'>Nosotros</h1>
            <p className='text-justify text-xl sm:pl-10 sm:pr-10 pl-32 pr-32'>
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
      </div>

    </>
  )
}

export default Body