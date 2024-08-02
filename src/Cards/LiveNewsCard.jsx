import React from 'react';
import { Link } from 'react-router-dom';
const LiveNewsCard = ({ imageSrc, headline }) => {
  const dotStyle = {
    width: '8px',
    height: '8px',
    backgroundColor: 'white',
    borderRadius: '50%',
    marginRight: '8px',
    animation: 'blink 1s infinite'
  };

  const blinkKeyframes = `
    @keyframes blink {
      0% { opacity: 0; }
      25% { opacity: 0.5; }
      50% { opacity: 1; }
      75% { opacity: 0.5; }
      100% { opacity: 0; }
    }
  `;

  return (
    <div className="relative w-full h-96">
      <Link to={`/story/${headline}`}>
      <img
        src={imageSrc}
        alt={headline}
        className="absolute inset-0 w-full h-84 object-cover"
      />
      </Link>
      {/* <div className="absolute inset-0 bg-gradient-to-t h-96 from-black opacity-50"></div> */}
      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold flex items-center">
        <span style={dotStyle}></span>
        LIVE
        <style>{blinkKeyframes}</style>
      </div>
      <Link to={`/story/${headline}`}>
      <h1 className="absolute bottom-4 p-2 px-4 text-black bg-white text-xl font-bold">
        {headline}
      </h1>
      </Link>
    </div>
  );
};

export default LiveNewsCard;
