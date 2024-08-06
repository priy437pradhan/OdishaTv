import React from 'react';
import { Link } from 'react-router-dom';

const ViralCard = ({ headline, imageSrc, id}) => {
 

  return (

            <div className="h-48 bg-white shadow-md" key={id}>
                <Link to={`/story/${id}`}  title="otv">
                  <img
                    src={imageSrc} 
                    alt={headline} 
                    title={headline} 
                    className="h-32"
                  />
                </Link>
                <Link to={`/story/${id}`} title="otv">
                  <h3 className="overflow-hidden max-h-[60px]  p-2">{headline} </h3>
                </Link>
            </div>
  );
};

export default ViralCard;
