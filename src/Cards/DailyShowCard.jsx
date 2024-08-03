import React from 'react';
import { Link } from 'react-router-dom';

const DailyShowCard = ({ headline, imageSrc, description,id }) => {
  
  
  return (
       
        <div className="row flex flex-wrap -mx-2">
            <div className="w-full  px-2 mb-4" key={id}>
              <div className="bg-white rounded-t-md overflow-hidden shadow-md">
                <Link to={`/story/${headline}`} title="otv">
                  <img
                    src={imageSrc}
                    alt={headline}
                    title={headline}
                    className="w-full h-56 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <Link to={`/story/${headline}`} title="otv">
                    <h3 className="text-lg font-bold mb-4 relative pb-4 after:content-[''] after:block after:w-40 after:h-px after:bg-gray-200 after:absolute after:bottom-0 after:left-0">
                      {headline}
                    </h3>
                  </Link>
                  <p className="text-gray-700 text-base">{description}</p>
                </div>
              </div>
            </div>
        </div>
  );
};

export default DailyShowCard;