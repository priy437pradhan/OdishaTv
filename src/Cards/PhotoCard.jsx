import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhotoVideo } from 'react-icons/fa';



const PhotoCard = ({ imageSrc, headline, id }) => {
  return (
    <div className="relative  px-2">
      <Link to={`/story/${id}`} title="otv" className="w-full block">
      <div className='relative'>
        <img
          src={imageSrc}
          alt={headline}
          className="w-full object-cover"
        />
        <div className='absolute flex  justify-center items-center bottom-1 left-1 h-[45px] w-[45px] bg-white rounded-full border-2'>
          <FaPhotoVideo className=" m-2 text-2xl text-black" />
        </div>
      </div>
        <h3 className="text-lg max-h-[82px] overflow-hidden font-bold mt-2">
          {headline}
        </h3>
      </Link>
     
    </div>
  );
};

export default PhotoCard;
