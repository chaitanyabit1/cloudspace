import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg"

const Menu = [
  {
    id: 1,
    name: "About",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "Feature",
    link: "/#feature",
  },
  {
    id: 4,
    name: "Pricing",
    link: "/#pricing",
  },
  {
    id: 5,
    name: "FAQ",
    link: "/#faq",
  },
  {
    id: 6,
    name: "contact",
    link: "/#contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

  // <header className='bg-primary rounded-br-[20px] rounded-bl-[20px]'>
  <header className={`${
    isSticky ? 'sticky top-0 z-[100] transition-all duration-300 ease-in-out transform translate-y-0 py-[10px] 2xl:py-[15px]' : 'py-4 2xl:py-[26px]'
  } w-full transition-all duration-300 ease-in-out bg-primary rounded-br-[20px] rounded-bl-[20px]`}>
   <div className="container">
      <div className="flex justify-between items-center rounded-md">
         <a href="#" className='block max-w-[180px] sm:max-w-[220px] 2xl:max-w-[350px] h-auto'><img src={logo} alt="cloud space" width={350} height={78} /></a>
         <button
            onClick={() =>
            setIsOpen(!isOpen)}
            className="text-white focus:outline-none lg:hidden"
            >
            {isOpen ? (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-transform transform-gpu"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
            ) : (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform transform-gpu"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{
                transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
            )}
         </button>
         <ul className="hidden lg:flex items-center gap-10 md:gap-10 lg:gap-15 2xl:gap-20">
            {Menu.map((menu) => (
            <li key={menu.id}>
               <a 
                  href={menu.link}
                  className="font-inter text-md 2xl:text-lg text-white hover:text-secondary duration-200"
                  >
               {menu.name}
               </a>
            </li>
            ))}
         </ul>
      </div>
      <div className='lg:hidden block'>
         <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} px-2 sm:p-0`}>
         <ul className='flex flex-col gap-3 py-3'>
            {Menu.map((menu) => (
            <li key={menu.id}>
               <a 
                  href={menu.link}
                  className="font-inter text-md 2xl:text-lg text-white hover:text-secondary duration-200"
                  >
               {menu.name}
               </a>
            </li>
            ))}
         </ul>
         </nav>
      </div>
   </div>
</header>
  )
}

export default NavBar