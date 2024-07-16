"use client";
import React, { useState, useEffect, useRef } from "react";
import navLinks from "./navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../constants/routes";

/**
 * Navbar component for rendering the main navigation bar.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */

const Navbar = () => {
  const pageUrl = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const navbarRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const shouldHaveShadow = window.scrollY > 10;
      if (navbarRef.current) {
        if (shouldHaveShadow) {
          navbarRef.current.classList.add("shadow-md");
        } else {
          navbarRef.current.classList.remove("shadow-md");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      ref={navbarRef}
      className="sticky top-0 z-50 flex items-center justify-between px-[24px] font-oswald  backdrop-blur-md md:h-[106px] md:pl-[120px] md:pr-[110px] text-white"
    >
      <Link href="/">
        <span className="my-[13px] uppercase h-[36px] text-[24px] font-semibold text-secondary-500 md:my-[30px] md:h-[47px] md:w-[70px] md:text-[32px]">
          Kalyan
        </span>
      </Link>

      {pageUrl === routes.BASE && (
        <>
          <div className="relative" ref={menuRef}>
            <div className="block md:hidden">
              <input
                hidden
                className="check-icon"
                id="check-icon"
                name="check-icon"
                type="checkbox"
                checked={isOpen}
                onClick={handleClick}
              />
              <label className="icon-menu" htmlFor="check-icon">
                <div className="bar bar--1"></div>
                <div className="bar bar--2"></div>
                <div className="bar bar--3"></div>
              </label>
            </div>
            {isOpen && (
              <div className="absolute right-1 top-[1.75rem]  z-50 block   min-w-[100px]  rounded-[16px] bg-white text-primarytext-700 p-[32px] font-oswald shadow md:hidden ">
                <ul className="flex cursor-pointer flex-col justify-start gap-5 text-left text-[16px] font-[400] tracking-wider">
                  {navLinks.map((item, index) => (
                    <Link href={item.href} key={item.id}>
                      <li
                        className=" font-oswald  text-[16px] font-[400]"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="transition delay-150 ease-in-out hover:text-orange-600">
                          {item.menuItem}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="hidden gap-8 md:flex lg:gap-20 xl:gap-[90px]">
            {navLinks.map((item, index) => (
              <Link key={item.id} href={item.href}>
                <span className="font-[400] transition delay-150 ease-in-out hover:text-primary-500">
                  {item.menuItem}
                </span>
              </Link>
            ))}
          </div>
        </>
      )}

      {pageUrl !== routes.BASE && (
        <Link
          href={routes.BASE}
          className="font-oswald text-sm font-bold md:text-[20px]"
        >
          BACK TO HOME
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
