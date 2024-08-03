import React from 'react';
import { Link } from 'react-router-dom';

const ViralCard = ({ headline, imageSrc}) => {
 

  return (
    <section className="pp-viral-news">
      <div className="container">

        <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-4 col-6" key={newsItem.id}>
              <div className="pp-card-five">
                <Link to={`/story/${headline}`} title="otv">
                  <img
                    src={imageSrc} 
                    alt={headline} 
                    title={headline} 
                    width="195"
                    height="146"
                    className="pp-card-five-img"
                  />
                </Link>
                <Link to={`/story/${headline}`} title="otv">
                  <h3>{headline} </h3>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ViralCard;
