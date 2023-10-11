'use client'
import Link from "next/link";

import React, { useState } from "react";

const NavBar2 = () => {
  // State to track if the menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="text-center md:text-left">
            <h1 className="bg-gradient-to-br from-primary to-accent bg-clip-text text-4xl text-transparent md:text-5xl">Björn Urban</h1>
          </div>
          <div className="flex md:order-2">
            <button
                onClick={toggleMenu}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-accent rounded md:bg-transparent md:text-accent md:p-0 md:dark:text-accent" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="/projects" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent md:p-0 md:dark:hover:text-accent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</Link>
              </li>
              <li>
                <Link href="/blog" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent md:p-0 md:dark:hover:text-accent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default NavBar2;
