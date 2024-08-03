import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import sampleData from '../lib/sampleData';

const CategoryMenuData = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const uniqueCategories = Array.from(new Set(sampleData.map(item => item.category)))
    .map(category => {
      return sampleData.find(item => item.category === category);
    });

  return (
    <div className="relative">
      <FaBars
        className="text-2xl cursor-pointer text-black hover:text-gray-600 transition duration-300 ease-in-out"
        aria-label="Menu"
        onClick={toggleMenu}
      />

      {isOpen && (
        <div
          className={`fixed top-0 right-0 w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50`}
          style={{ height: '100vh' }}
        >
          <FaTimes
            className="absolute top-4 right-4 text-black text-2xl cursor-pointer hover:text-gray-600 transition duration-300 ease-in-out"
            aria-label="Close"
            onClick={toggleMenu}
          />

          <div className="p-6 h-full overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {uniqueCategories.map(item => (
                <li 
                  key={item.category} 
                  className="border-b border-gray-200 transition duration-300 ease-in-out dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500"
                >
                  <Link
                    to={`/category/${item.category}`}
                    className="block text-lg text-gray-800 py-3 px-4"
                    onClick={toggleMenu}
                  >
                    {item.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryMenuData;
