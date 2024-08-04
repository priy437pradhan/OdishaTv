import React from 'react';
import { Link } from 'react-router-dom';

const VideoSubCard = ({ imageSrc, headline, id }) => {
  return (
    <>
          <div className="relative " key={id}>
            <Link to={`/story/${headline}`} title="otv">
              <img
                src={imageSrc}
                alt={headline}
              />
            </Link>
          </div>
          <Link to={`/story/${headline}`} title="otv">
            <h4 className="text-base font-medium mt-2">
              {headline}
            </h4>
          </Link>
          </>
  );
};

export default VideoSubCard;
