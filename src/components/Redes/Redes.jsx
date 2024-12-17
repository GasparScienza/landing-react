import React, { useState } from 'react'
import Instagram from './Instagram'


function Redes({clase}) {
    const [isOpenRed, setIsOpenRed] = useState(false);

    const toogleInstagram = () => {
        setIsOpenRed(!isOpenRed);
        
    }

    return (
        <>
            <ul className="flex sm:space-x-4 space-x-1">
                <button className='text-3xl  hover:scale-125 hover:text-fuchsia-500 duration-300'
                    onClick={toogleInstagram}
                >
                    <i className="bi bi-instagram"></i>
                </button>
                <a href="https://wa.me/+543534199746"
                    target="_blank"
                    rel="noopener refererrer"
                    className={`text-3xl hover:scale-125 hover:text-fuchsia-500 duration-300`}
                >
                    <i className="bi bi-whatsapp"></i>
                </a>
            </ul>

            <div className={`${clase} 
                ${isOpenRed ? "opacity-100 visible transition-all duration-300" : "opacity-0 invisible transition-all duration-300"}`}
            >
                <Instagram />
            </div>
        </>
    )
}

export default Redes