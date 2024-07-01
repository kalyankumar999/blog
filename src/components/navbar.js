'use client';
import React, { useState } from 'react';
import navLinks from './navlinks';
import Link from 'next/link';


/**
 * Navbar component for rendering the main navigation bar.
 *
 * @returns {JSX.Element} The rendered navigation bar
 */

const Navbar = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" sticky top-0  z-50 flex items-center text-white justify-between  px-[24px] font-oswald backdrop-blur-md md:h-[106px] md:pl-[120px] md:pr-[110px]">
      <div className="my-[13px] h-[36px] text-[24px] font-semibold text-secondary-500 md:my-[30px] md:h-[47px] md:w-[70px] md:text-[32px]">
        LOGO
      </div>
     
        <>
          <div className="block md:hidden">
            <input
              hidden
              className="check-icon"
              id="check-icon"
              name="check-icon"
              type="checkbox"
              onClick={handleClick}
            />
            <label className="icon-menu" htmlFor="check-icon">
              <div className="bar bar--1"></div>
              <div className="bar bar--2"></div>
              <div className="bar bar--3"></div>
            </label>
          </div>
          {isOpen && (
            <div className=" fixed right-4  top-10 z-50  block h-[312px]  rounded-[16px] bg-white  text-primarytext-500 p-[32px] font-oswald shadow md:hidden ">
              <ul className="flex cursor-pointer flex-col justify-start gap-[32px] text-left text-[16px] font-[400] tracking-wider">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    className=" font-oswald  text-[16px] font-[400]"
                  >
                    <Link href={item.href}>
                      <span className="transition delay-150 ease-in-out hover:text-primary-500">
                        {item.menuItem}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="hidden gap-8 md:flex lg:gap-20 xl:gap-[90px]">
            {navLinks.map((item, index) => (
              <Link key={index} href={item.href}>
                <span className="font-[400] transition delay-150 ease-in-out hover:text-primary-500">
                  {item.menuItem}
                </span>
              </Link>
            ))}
          </div>
        </>
   

      {/* {pageUrl !== Endpoints.BASE && (
        <Link
          href={Endpoints.BASE}
          className="font-oswald text-sm font-bold text-primary-700 md:text-[20px]"
        >
          BACK TO HOME
        </Link>
      )} */}
    </nav>
  );
};

export default Navbar;
