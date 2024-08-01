import React from 'react';
import { Link } from 'react-router-dom';

const CardTwo = ({ headline, imageSrc, category, bgColor, link }) => {
  return (
    <div className={`py-4 flex pr-4 h-36 shadow-md mb-2 rounded-sm ${bgColor}`}>
      <div className="w-3/5 pl-2 flex flex-col justify-between">
        <Link to={link}>
          <h2 className="text-sm font-bold max-h-[68px] overflow-hidden pr-2 mb-2">{headline}</h2>
        </Link>
        <p className="text-gray-600">{category}</p>
      </div>
      <div className="w-2/5 h-28">
        <Link to={link}>
          <img 
            src={imageSrc} 
            alt={headline} 
            className="w-full h-full object-cover rounded-sm" 
            style={{ aspectRatio: '1 / 1' }}
          />
        </Link>
      </div>
    </div>
  );
};

export default CardTwo;
