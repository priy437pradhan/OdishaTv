import React from 'react';
import { Link } from 'react-router-dom';

const PhotoCard = ({ imageSrc, headline, id }) => {
  return (
    <div className="relative  px-2">
      <Link to={`/story/${headline}`} title="otv" className="w-full block">
        <img
          src={imageSrc}
          alt={headline}
          className="w-full object-cover"
        />
        <h3 className="text-lg font-bold mt-2">
          {headline}
        </h3>
      </Link>
      <div className="absolute bottom-2 left-2 z-30 bg-white rounded-full p-1">
       
      </div>
    </div>
  );
};

export default PhotoCard;
