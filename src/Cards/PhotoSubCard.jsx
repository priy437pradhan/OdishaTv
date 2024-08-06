import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhotoVideo } from 'react-icons/fa';

const PhotoSubCard = ({ imageSrc, headline, id }) => {
  return (
    < div className='mb-4'>
      <div className="relative" key={id}>
        <Link to={`/story/${id}`}title="otv">
          <div className='relative'>
            <img
              src={imageSrc}
              alt={headline}
              className="w-full"
            />
            <div className='absolute flex justify-center items-center bottom-1 left-1 h-[25px] w-[25px] bg-white rounded-full border-2'>
              <FaPhotoVideo className="text-base text-black" />
            </div>
          </div>
        </Link>
      </div>
      <Link to={`/story/${id}`} title="otv">
        <h4 className="text-base  max-h-[95px] overflow-hidden  font-medium mt-2">
          {headline}
        </h4>
      </Link>
    </div>
  );
};

export default PhotoSubCard;
