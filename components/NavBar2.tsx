'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const NavLinkWrapper = (props: { text: string; path: string }) => {
  const pathname = usePathname();
  const isActive = () => {
    return (
      pathname.includes(props.path) || (props.path === '/#' && pathname === '/')
    );
  };
  return (
    <Link
      href={props.path}
      className={`block py-2 pl-3 pr-4${
        isActive()
          ? 'rounded bg-accent text-white md:bg-transparent md:p-0 md:text-accent md:dark:text-accent'
          : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent md:p-0 md:dark:hover:text-accent dark:text-white' +
            ' dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
      }`}
      aria-current={isActive() ? 'page' : 'false'}
    >
      {props.text}
    </Link>
  );
};
const NavBar2 = () => {
  // State to track if the menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="text-center md:text-left">
          <h1 className="bg-gradient-to-br from-primary to-accent bg-clip-text text-4xl text-transparent md:text-5xl">
            Björn Urban
          </h1>
        </div>
        <div className="flex md:order-2">
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="size-10 items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="hidden w-1/2 xl:block" />
        <div className="hidden xl:block" />
        <div className="hidden xl:block" />
        <div className="hidden xl:block" />
        <div className="hidden xl:block" />
        <div className="hidden xl:block" />
        <div className="hidden xl:block" />
        <div className="hidden xl:block" />

        <div
          className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:order-1 md:flex md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <NavLinkWrapper path="/#" text="About Me" />
            </li>
            <li>
              <NavLinkWrapper path="/projects" text="Projects" />
            </li>
            <li>
              <NavLinkWrapper path="/blog" text="Blog" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;
