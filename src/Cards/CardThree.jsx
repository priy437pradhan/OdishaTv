import React from 'react';
import { Link } from 'react-router-dom';

const CardThree = ({ headline, imageSrc, category }) => {
  return (
    <div className={`h-60 bg-white`}>
      <div className="w-full my-4 h-40">
        <Link to={`/story/${headline}`}>
          <img 
            src={imageSrc} 
            alt={headline} 
            className="w-full h-full object-cover rounded-sm" 
            style={{ aspectRatio: '1 / 1'}}
          />
        </Link>
      </div>
      <Link to={`/story/${headline}`}>
        <h2 className="text-sm font-bold overflow-hidden max-h-[60px] my-2">{headline}</h2>
      </Link>
    </div>
  );
};

export default CardThree;
