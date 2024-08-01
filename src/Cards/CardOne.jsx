import React from 'react';
import { Link } from 'react-router-dom';

const CardOne = ({ headline, imageSrc, category }) => {
  return (
    <div className="py-4 flex pr-4 h-28">
      <div className="w-2/5 h-24">
        <Link to={`/category/${category}`}>
          <img 
            src={imageSrc} 
            alt={headline} 
            className="w-full h-full object-cover rounded-sm" 
            style={{ aspectRatio: '1 / 1' }}
          />
        </Link>
      </div>
      <div className="w-3/5 pl-2 flex flex-col justify-between">
        <Link to={`/category/${category}`}>
          <h2 className="text-sm font-bold max-h-[68px] overflow-hidden mb-2">{headline}</h2>
        </Link>
        <p className="text-gray-600">{category}</p>
      </div>
    </div>
  );
};

export default CardOne;
