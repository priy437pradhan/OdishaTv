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
          <h2 className="text-black text-md font-bold px-2 pt-4 pb-2 h-24 overflow-hidden">{headline}</h2>
        </Link>
        <ul className="px-4">
          <li className="list-none text-xs text-gray-700 uppercase">
            <Link to={`/story/${headline}`} title={category} className="text-blue-700 font-semibold">
              {category}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LiveSubCardOne;
