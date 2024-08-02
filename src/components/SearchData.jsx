import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';
import sampleData from '../lib/sampleData';

const SearchData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length >= 3) {
        const filtered = sampleData
          .filter((item) => 
            item.category.toLowerCase().includes(value.toLowerCase()) ||
            item.title.toLowerCase().includes(value.toLowerCase())
          )
          .slice(0, 3);
        setFilteredData(filtered);
      } else {
        setFilteredData([]);
      }
  };

  const toggleSearchInput = () => {
    setShowInput(!showInput);
  };

  const handleClose = () => {
    setShowInput(false);
    setSearchTerm('');
    setFilteredData([]);
  };

  return (
    <div className="relative z-50">
      <FaSearch
        className="text-lg cursor-pointer hover:text-gray-300"
        aria-label="Search"
        onClick={toggleSearchInput}
      />
      {showInput && (
        <div
          className="absolute top-0 right-0 transform transition-transform duration-300"
          style={{ width: '200px', transform: showInput ? 'translateX(0)' : 'translateX(200px)' }}
        >
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-1 border border-gray-300 rounded h-8"
              placeholder="Search categories..."
            />
            <FaTimes
              className="absolute right-2 top-2 text-gray-400 cursor-pointer hover:text-gray-600"
              onClick={handleClose}
            />
          </div>
          {filteredData.length > 0 && (
            <ul className="bg-white border border-gray-300 rounded mt-1">
              {filteredData.map((item) => (
                <li key={item.id} className="p-2 hover:bg-gray-100">
                  <Link to={`/category/${item.category}`}>{item.category}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchData;
