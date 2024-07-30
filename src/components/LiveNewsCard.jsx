
import React from 'react';

const LiveNewsCard = ({ imageUrl, headline }) => {
  return (
    <div className="relative w-full h-80">
      <img
        src={imageUrl}
        alt={headline}
        className="absolute inset-0 w-full h-80 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t h-80 from-black opacity-50"></div>
      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold">
        LIVE
      </div>
      <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
        {headline}
      </div>
    </div>
  );
};

export default LiveNewsCard;
