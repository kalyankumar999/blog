"use client";
import React, { useState, useEffect, useRef } from "react";
import navLinks from "./navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../constants/routes";
import { Menu, X } from "lucide-react";

/**
 * Modern Floating Navbar component for rendering a centered navigation bar.
 *
 * @returns {JSX.Element} The rendered floating navigation bar.
 */

const Navbar = () => {
  const pageUrl = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const menuRef = useRef();
  const navbarRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('[for="check-icon"]') &&
        !event.target.closest("button[aria-label]")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

useEffect(() => {
  const sections = navLinks
    .map((item) => document.querySelector(item.href))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);

      if (visible) {
        setActiveLink(`#${visible.target.id}`);
      }
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 pointer-events-none">
      <nav
        ref={navbarRef}
        className={`pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "glass-morphism shadow-2xl shadow-purple-500/20 backdrop-blur-xl"
            : "glass-morphism shadow-lg shadow-purple-500/10 backdrop-blur-md"
        } border border-cyan-400/20 rounded-2xl overflow-hidden`}
      >
        <div className="px-2 md:px-6">
          <div className="flex items-center justify-center md:justify-between h-14 md:h-16 gap-4 md:gap-8">
            {/* Logo - Hidden on mobile, visible on tablet+ */}
            <Link href="/" className="hidden md:flex flex-shrink-0 group">
              <div className="flex items-center gap-2">
                <div className="relative w-9 h-9 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-white font-bold text-sm font-oswald">K</span>
                </div>
                
              </div>
            </Link>

            {pageUrl === routes.BASE && (
              <>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                  {navLinks.map((item) => {
                    const isActive = activeLink === item.href;
                    return (
                      <Link key={item.id} href={item.href}>
                        <span
                          className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${
                            isActive
                              ? "bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-cyan-200 shadow-md shadow-cyan-400/20"
                              : "text-gray-300 hover:text-cyan-300 hover:bg-purple-500/15"
                          }`}
                        >
                          {item.menuItem}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* CTA Button - Desktop */}
                <div className="hidden md:block">
                  <Link href="#connect">
                    <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap">
                      Let's Talk
                    </button>
                  </Link>
                </div>

                {/* Mobile Logo + Menu */}
                <div className="md:hidden flex items-center justify-between w-full gap-3">
                  {/* Mobile Logo */}
                  <Link href="/" className="flex-shrink-0 group">
                    <div className="flex items-center gap-1.5">
                      <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-110">
                        <span className="text-white font-bold text-xs font-oswald">K</span>
                      </div>
                      <span className="text-white font-bold text-xs font-oswald">Kalyan</span>
                    </div>
                  </Link>

                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-1.5 rounded-lg hover:bg-purple-500/20 transition-colors flex-shrink-0"
                    aria-label="Toggle menu"
                  >
                    {isOpen ? (
                      <X className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <Menu className="w-5 h-5 text-cyan-400" />
                    )}
                  </button>
                </div>
              </>
            )}

            {pageUrl !== routes.BASE && (
              <Link
                href={routes.BASE}
                className="md:hidden px-3 py-1.5 rounded-lg glass-morphism text-cyan-300 hover:text-white font-semibold text-xs transition-all duration-300 hover:shadow-lg"
              >
                ← Home
              </Link>
            )}
          </div>

          {/* Mobile Navigation Menu */}
          {pageUrl === routes.BASE && isOpen && (
            <div
              ref={menuRef}
              className="md:hidden border-t border-cyan-400/20 bg-gradient-to-b from-cyan-500/5 to-purple-500/5 backdrop-blur-sm animate-fade-in-scale"
            >
              <div className="px-3 py-3 space-y-2 max-h-72 overflow-y-auto">
                {navLinks.map((item) => {
                  const isActive = activeLink === item.href;
                  return (
                    <Link key={item.id} href={item.href}>
                      <span
                        className={`block px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-500/40 to-purple-500/40 text-cyan-200 shadow-md shadow-cyan-400/20"
                            : "text-gray-300 hover:text-cyan-300 hover:bg-purple-500/20"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.menuItem}
                      </span>
                    </Link>
                  );
                })}
                <Link href="#connect">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full mt-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg text-sm hover:shadow-lg transition-all duration-300"
                  >
                    Let's Talk
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
