import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ imageSrc, headline, id }) => {
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
    
    </div>
  );
};

export default VideoCard;
