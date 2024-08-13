import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sampleData } from '../lib/sampleData';

const districts = ['Angul', 'Balangir', 'Cuttack','priya'];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const navigate = useNavigate();

  const handleSelect = (district) => {
    const filteredData = sampleData.filter(item =>
      JSON.stringify(item).toLowerCase().includes(district.toLowerCase())
    );

    if (filteredData.length > 0) {
      setSelectedDistrict(district);
      setIsOpen(false);

      navigate(`/category/${district}`, { state: { districtData: filteredData } });
    } else {
      alert('District not found in data');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
      >
        {selectedDistrict || 'Select District'}
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border rounded shadow-lg max-h-60 overflow-y-auto z-10">
          {districts.map((district) => (
            <div
              key={district}
              onClick={() => handleSelect(district)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {district}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
