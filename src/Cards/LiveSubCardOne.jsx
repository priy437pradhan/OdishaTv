import React from 'react';
import { Link } from 'react-router-dom';

const LiveSubCardOne =({ headline, imageSrc, category })  => {
  return (
    <div className="w-full px-1 h-80">
      <div className="bg-white h-full relative pb-6 shadow-md rounded-sm">
        <Link to={`/story/${headline}`} title={headline}>
          <img
            src={imageSrc} 
            alt={headline}
            className="w-full h-56 object-cover rounded-t-sm"
          />
        </Link>
        <Link to="/id" title={headline}>
          <h2 className="text-black text-md font-bold p-2  overflow-hidden max-h-[60px]">{headline}</h2>
        </Link>
        <ul className="px-2">
          <li className="list-none text-xs text-gray-700 uppercase">
            <Link to={`/category/${category}`} title={category} className="font-semibold">
              {category}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LiveSubCardOne;
