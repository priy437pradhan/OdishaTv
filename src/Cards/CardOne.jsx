import React from 'react';
import { Link } from 'react-router-dom';

const CardOne = ({ headline, imageSrc, category ,id  }) => {
  return (
    <div className="pb-2 flex pr-4 h-28" key={id}>
      <div className="w-2/5 h-24">
        <Link to={`/story/${id}`}>
          <img 
            src={imageSrc} 
            alt={headline} 
            className="w-full h-full object-cover rounded-sm" 
            style={{ aspectRatio: '1 / 1' }}
          />
        </Link>
      </div>
      <div className="w-3/5 pl-2 flex flex-col justify-between">
        <Link to={`/story/${id}`}>
          <h2 className="text-sm font-bold max-h-[60px] overflow-hidden mb-2">{headline}</h2>
        </Link>
        <Link to={`/category/${category}`}>
        <p className="text-gray-600">{category}</p>
        </Link>
      </div>
    </div>
  );
};

export default CardOne;
