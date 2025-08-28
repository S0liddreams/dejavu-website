"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative lg:hidden">
      {/* Header with hamburger button */}
      <div className="flex items-center justify-between   shadow-xs">
        <div className="text-xl font-bold text-gray-800">
          <div>
            <Image
              src="/images/DjLogoWhite1.svg"
              alt="Logo"
              width={75}
              height={24}
              className="w-[110px] h-[56px]  lg:hidden"
            />
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="relative z-50 p-2 rounded-[100px] focus:outline-none    bg-[#FFFFFF59] transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`absolute block w-[24px] h-0.5 bg-gray-200 transform transition-all duration-300 ${
                isOpen ? "rotate-45 top-3" : "top-1"
              }`}
            ></span>
            <span
              className={`absolute block w-full h-0.5 bg-gray-200 transform transition-all duration-300 ${
                isOpen ? "opacity-0" : "top-3"
              }`}
            ></span>
            <span
              className={`absolute block w-full h-0.5 bg-gray-200 transform transition-all duration-300 ${
                isOpen ? "-rotate-45 top-3" : "top-5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute z-50 top-full left-0 w-full rounded-[16px]  bg-white shadow-lg transform transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-0 invisible"
        }`}
      >
        <nav className="py-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={closeMenu}
              className="block px-6 py-3 text-[14px] text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-20 z-10"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default MobileMenu;
