import imagenes from '../Galeria.js'

function Proyectos() {
  return (
    <>
      <h1 className="text-center text-4xl ">Proyectos</h1>
      <div className="p-5 md:p-10">
        <div className="colums-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4
          [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8
        ">
          {imagenes.map((imagen, index)=>(
            <img key={index} src={imagen} alt={`Image ${index + 1}`} className="rounded-xl hover:lg:scale-110 hover:md:scale-105 hover:sm:scale-105 hover:scale-[103%] duration-300"/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Proyectos;
