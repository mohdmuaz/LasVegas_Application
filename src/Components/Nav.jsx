import React, { useState } from 'react';
import LogoImage from '../assets/images/logo.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  const Links = [
    { name: 'MENU', link: '/' },
    { name: 'DRINKS', link: '/' },
    { name: 'CATERINGS', link: '/' },
    { name: 'EVENTS', link: '/' },
    { name: 'PARTIES', link: '/' },
    { name: 'RESERVE', link: '/' },
    { name: 'JOBS', link: '/' },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10 bg-white">
      <div className="flex items-center justify-between py-4 h-20 px-4 md:px-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-12 w-auto" // Ensures fixed height, auto width for aspect ratio
            src={LogoImage}
            alt="Logo"
          />
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-gray-700 text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} />
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:space-x-4 lg:space-x-6 xl:space-x-8 absolute md:static top-20 left-0 w-full bg-white md:w-auto md:bg-transparent transition-all duration-300 ease-in ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="text-center text-sm font-bold my-2 md:my-0"
            >
              <a
                href={link.link}
                className="text-gray-700 hover:text-red-800 duration-300 block px-2 text-responsive"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
