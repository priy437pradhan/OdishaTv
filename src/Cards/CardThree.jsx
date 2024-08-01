import React from 'react';
import { Link } from 'react-router-dom';

const CardThree = ({ headline, imageSrc, category }) => {
  return (
    <div className={`h-56 bg-white`}>
      <div className="w-full my-4 h-40">
        <Link to={`/category/${category}`}>
          <img 
            src={imageSrc} 
            alt={headline} 
            className="w-full h-full object-cover rounded-sm" 
            style={{ aspectRatio: '1 / 1'}}
          />
        </Link>
      </div>
      <Link to={`/category/${category}`}>
        <h2 className="text-sm font-bold overflow-hidden my-2">{headline}</h2>
      </Link>
    </div>
  );
};

export default CardThree;
