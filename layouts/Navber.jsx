"use client";

import { useState, useEffect } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Logo from "../public/logo.png";
import Button from "@/components/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "Pages", "Services", "Product", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "bg-white/70 backdrop-blur-lg shadow-sm py-3"
            : "bg-white/40 py-5 lg:py-6"
        }`}>
        <Container>
          <div className="flex justify-between items-center relative z-60">
            {/* Logo Area */}
            <div className="cursor-pointer transition-transform hover:scale-105 duration-300">
              <Image src={Logo} alt="Logo" className="w-28 md:w-32 h-auto" /> 
            </div>
            {/* Desktop Nav */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-x-10">
                {navItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="group relative cursor-pointer font-jost text-[16px] font-medium text-gray-800 hover:text-primarys transition-colors duration-300"
                  >
                    {item}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primarys transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            </nav>
            {/* CTA Button & Hamburger */}
            <div className="flex items-center gap-6">
              {/* Desktop Button with Hover effect */}
              <div className="hidden sm:block hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-md">
                <Button btnText="Download CV" />
              </div>
              {/* Premium Custom Hamburger Menu (Mobile & Tab) */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-60 group"
              >
                <span className={`block h-0.5 bg-gray-900 transition-all duration-300 ease-out ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-7 group-hover:w-6"}`}></span>
                <span className={`block h-0.5 bg-gray-900 transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-0 w-0" : "w-5 group-hover:w-7"}`}></span>
                <span className={`block h-0.5 bg-gray-900 transition-all duration-300 ease-out ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-7 group-hover:w-5"}`}></span>
              </button>
            </div>
          </div>
        </Container>
      </header>
      {/* Mobile Menu - Full Screen Overlay */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center z-40 transition-all duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-8"
        }`}
      >
        <nav>
          <ul className="flex flex-col items-center gap-y-8">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                style={{ 
                  transitionDelay: `${isMobileMenuOpen ? index * 100 : 0}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                }}
                className="cursor-pointer font-jost text-3xl font-medium text-gray-800 hover:text-primarys transition-all duration-500 ease-out"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Button */}
        <div 
          className="mt-12 sm:hidden transition-all duration-500 delay-500"
          style={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <Button btnText="Download CV" />
        </div>
      </div>
    </>
  );
}