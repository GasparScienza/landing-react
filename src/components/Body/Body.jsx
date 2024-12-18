import React from 'react'
import Impresoras from '../../../img/Banner Impresoras.jpg'
import Proyecto7 from '../../../img/Proyecto7.jpg'
import Proyecto1 from '../../../img/Proyecto1.jpg'
import Proyecto2 from '../../../img/Proyecto2.jpg'
import Proyecto3 from '../../../img/Proyecto3.jpg'
import Proyecto4 from '../../../img/Proyecto4.jpg'
import Proyecto5 from '../../../img/Proyecto5.jpg'

function Body() {
  return (
    <>
      <div className='p-10'>
        <div className='pt-28  pb-10'>
          <img src={Impresoras} alt="Banner" className='z-0 rounded-[50px]' />
        </div>

        <div id="nosotros" className='p-10 bg-violet-100 rounded-[50px] bg-opacity-55'>
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

        <div id="proyectos" className='p-10 bg-violet-100 rounded-[50px] bg-opacity-55'>
          <h1 className='text-center text-5xl pb-10'>Proyectos</h1>
          <div class="grid grid-cols-5 gap-4">
            <div class="..."><img src={Proyecto7} alt="" className='rounded-xl h-96' /></div>
            <div class="..."><img src={Proyecto2} alt="" className='rounded-xl h-96' /></div>
            <div class="col-span-2 ..."><img src={Proyecto5} alt="" className='rounded-xl h-96' /></div>
            <div class="..."><img src={Proyecto3} alt="" className='rounded-xl h-96' /></div>
            <div class="col-span-2 ..."><img src={Proyecto1} alt="" className='rounded-xl h-96'/></div>
            <div class="..."><img src={Proyecto4} alt="" className='rounded-xl h-96' /></div>
            <div class="...">06</div>
            <div class="col-span-2 ...">07</div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Body