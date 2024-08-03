import React from 'react';
import { Link } from 'react-router-dom';

const PhotoVideoSection = ({ imageSrc, headline, id }) => {
  return (
    <div className="w-full bg-white flex">
      <div className="flex mx-1 w-2/3 p-2">
        <div className="w-full px-2 mb-4">
          <Link to={`/story/${headline}`} title="otv">
            <img
              src={imageSrc}
              alt={headline}
              className="w-full h-[285px] object-cover"
            />
          </Link>
          <Link to={`/story/${headline}`} title="otv">
            <h3 className="text-lg font-bold mt-2">
              {headline}
            </h3>
          </Link>
        </div>

      </div>
      <div className="flex mx-1 w-1/3 p-2">
      <div className="w-full px-2">
                  <div className="mb-4" key={id}>
                    <div className="relative">
                      <Link to={`/story/${headline}`} title="otv">
                        <img
                          src={imageSrc}
                          className="w-full h-[110px] object-cover"
                        />
                      </Link>
                      
                    </div>
                    <Link to={`/story/${headline}`} title="otv">
                      <h4 className="text-base font-medium mt-2">
                        {headline}
                      </h4>
                    </Link>
                  </div>
        </div>     
             
      </div>
    </div>
  );
};

export default PhotoVideoSection;
