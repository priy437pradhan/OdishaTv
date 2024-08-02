import React from 'react';
import { Link } from 'react-router-dom';

const WebStoryCard = ({ headline, imageSrc, link }) => {
  return (
    <div className="relative flex w-full h-64">
      <Link to={`/story/${headline}`}>
        <img 
          src={imageSrc} 
          alt={headline} 
          className="absolute inset-0 w-full h-full object-cover rounded-sm" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-sm"></div>
      </Link>
      <div className="absolute bottom-0 p-4">
      <Link to={`/story/${headline}`}>
          <h2 className="text-white text-sm font-bold">{headline}</h2>
        </Link>
      </div>
    </div>
  );
};

export default WebStoryCard;
