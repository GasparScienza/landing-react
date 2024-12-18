import Proyecto7 from "../..//img/Proyecto7.jpg";
import Proyecto1 from "../../img/Proyecto1.jpg";
import Proyecto2 from "../../img/Proyecto2.jpg";
import Proyecto3 from "../../img/Proyecto3.jpg";
import Proyecto4 from "../../img/Proyecto4.jpg";
import Proyecto5 from "../../img/Proyecto5.jpg";
import Proyecto8 from "../../img/Proyecto8.jpg";
import Proyecto9 from "../../img/Proyecto9.jpg";

const imagenes = [Proyecto1, 
  Proyecto2, 
  Proyecto3, 
  Proyecto4, 
  Proyecto5, 
  Proyecto7, 
  Proyecto8,
  Proyecto9
];

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
