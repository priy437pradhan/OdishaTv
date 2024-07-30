import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: 'Home', path: '/' },
    { name: 'World', path: '/world' },
    { name: 'Politics', path: '/politics' },
    { name: 'Business', path: '/business' },
    { name: 'Technology', path: '/technology' },
    { name: 'Sports', path: '/sports' },
    { name: 'Entertainment', path: '/entertainment' },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-lg">
      <div className="hidden md:flex justify-between items-center bg-gray-200 p-2">
        <div className="text-sm">
          <span>{dateTime.toLocaleDateString()}</span> | <span>{dateTime.toLocaleTimeString()}</span> | <span>Weather</span>
        </div>
        <div className="flex space-x-4">
          <FaFacebook className="text-xl cursor-pointer" />
          <FaTwitter className="text-xl cursor-pointer" />
          <FaInstagram className="text-xl cursor-pointer" />
        </div>
      </div>
      
      <div className="bg-white font-mono font-bold py-4">
        <h1 className="text-3xl text-center">Odisha Television</h1>
      </div>
      
      <div className="flex justify-between items-center bg-red-800 text-white p-2">
        <div className="flex-1 flex lg:justify-center overflow-x-auto space-x-4">
          {categories.map((category, index) => (
            <Link key={index} to={category.path} className="text-lg whitespace-nowrap hover:underline">
              {category.name}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4 shadow-sm  p-2">
  <FaSearch className="text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gray-300" />
  <FaBars className="text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gray-300" />
</div>

      </div>
    </header>
  );
}

export default Header;
