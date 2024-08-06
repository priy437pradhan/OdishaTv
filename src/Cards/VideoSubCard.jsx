import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
const VideoSubCard = ({ imageSrc, headline, id }) => {
  return (
    <div  className='mb-4'>
          <div className="relative" key={id}>
            <div className='relative'>
            <Link to={`/story/${id}`} title="otv">
              <img
                src={imageSrc}
                alt={headline}
              />
            </Link>
            <div className='absolute flex justify-center items-center bottom-1 left-1 h-[25px] w-[25px] bg-white rounded-full border-2'>
              < FaPlay className="text-base text-black" />
            </div>
            </div>
          </div>
          <Link to={`/story/${id}`} title="otv">
            <h4 className="text-base max-h-[95px] overflow-hidden font-medium mt-2">
              {headline}
            </h4>
          </Link>
          </div>
  );
};

export default VideoSubCard;
