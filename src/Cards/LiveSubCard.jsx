import React from 'react';

const LiveSubCard = ({ title, content, imgSrc }) => {
  return (
    <div className="h-[80px] bg-white border-b-2 rounded-sm flex items-center p-2">
      <div className="w-[67%]">
        <h3 className="text-zinc-950">{title}</h3>
        <p className="text-sm p-0 m-0">{content}</p>
      </div>
      <div className="w-[33%] flex justify-end">
        <img src={imgSrc} alt="Image" className="h-full object-cover rounded" />
      </div>
    </div>
  );
};

export default LiveSubCard;
