import React from "react";
import Logo from "../../../img/Logo.png";
import { useState } from "react";
import Redes from "../Redes/Redes";

const navbarLinks = [
  {
    id: 1,
    title: "Inicio",
    link: "/# ",
  },
  {
    id: 2,
    title: "Nosotros",
    link: "/#",
  },
  {
    id: 3,
    title: "Contacto",
    link: "/#",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-50 w-full p-5 px-10">
      <div className="flex justify-between items-center sm:px-4 sm:py-3 px-4 py-3 bg-violet-100 bg-opacity-80 rounded-3xl z-50">
        <div>
          <img
            src={Logo}
            alt="Logo 3D Impresiones"
            className="w-[50px] transition-transform hover:scale-110 transform inline-block duration-300"
          />
        </div>

        <div className="md:hidden text-xl">
          <h1>Impresiones 3D</h1>
        </div>
        {/*Boton hamburguesa*/}
        <button onClick={toogleMenu} className="text-3xl md:hidden">
          {isOpen ? <i class="bi bi-x-square"></i> : <i class="bi bi-list"></i>}
        </button>


        {/*Botones de menu*/}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-14 space-x-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-xl transition-transform hover:scale-125 hover:text-fuchsia-500 
                    transform inline-block duration-300"
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
          <div className="hidden md:block">
            <Redes clase={'fixed top-[120px] right-[250px]'}/>
          </div>
      </div>

      <div className="flex justify-end p-1">
        <div
          className={`md:hidden absolute bg-violet-100 bg-opacity-50 transition-all duration-300 w-[250px]
          rounded-lg ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <ul className="flex flex-col">
            {navbarLinks.map((link) => (
              <li key={link.id} className="text-center py-2">
                <a
                  className="text-xl transition-transform hover:scale-125 transform inline-block duration-300"
                  href={link.link}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex space-x-4 py-2 justify-center">
            <Redes clase={'fixed top-[150px] right-[510px]'}/>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
