import React from 'react'


const navbarRedes = [
    {
        id: 1,
        title: "3D Ballesteros",
        icon: "bi bi-instagram",
        link: "https://www.instagram.com/3d_ballesteros/",
    },
    {
        id: 2,
        title: "3D Bell Ville",
        icon: "bi bi-instagram",
        link: "https://www.instagram.com/3d_bellville/",
    },
];

function Instagram() {

  return (
    <>
    <div className={` absolute bg-violet-100 bg-opacity-50 transition-all duration-300 h-[120px] w-[210px]
            rounded-lg
            `}
                >
                    <div className="flex justify-center items-center p-1">
                        <ul className="flex flex-col justify-center gap-1 ">
                            {navbarRedes.map((red) => (
                                <li key={red.id}>
                                    <a
                                        href={red.link}
                                        target="_blank"
                                        rel="noopener refererrer"
                                        className={`text-3xl hover:bg-violet-50 duration-300 flex items-center rounded-lg
                      p-2 gap-3 hover:text-fuchsia-500
                    `}
                                        
                                    >
                                        <i className={red.icon}></i>
                                        <p className="text-xl">{red.title}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
               
    </>
  )
}

export default Instagram