import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Watch_img from '../assets/testing.jpg';
import {HeadingComponent} from './HeadingComponent';

const sliderData = [
  {
    imgSrc: Watch_img,
    imgAlt: 'Watch Live Coverage',
    linkHref: '/watch',
    linkTitle: 'Watch',
    description: 'Insolvency: What Should The Airline Do Next',
  },
  {
    imgSrc: Watch_img,
    imgAlt: 'Watch Live Coverage',
    linkHref: '/watch',
    linkTitle: 'Watch',
    description: 'Go First  Should The Airline Do Next',
  },
  {
    imgSrc: Watch_img,
    imgAlt: 'Watch Live Coverage',
    linkHref: '/watch',
    linkTitle: 'Watch',
    description: 'First Insolvency: What Should The Airline Do Next',
  },
  {
    imgSrc: Watch_img,
    imgAlt: 'Watch Live Coverage',
    linkHref: '/watch',
    linkTitle: 'Watch',
    description: 'What Should The Airline Do Next',
  },
];

const WatchSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
      }, 3000); 
  
      return () => clearInterval(interval);
    }, []);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + sliderData.length) % sliderData.length
      );
    };
  
    return (
      <div className="relative mb-4 shadow-md" style={{ height: '350px' }}>
        <div className="p-2">
        <HeadingComponent title="watch" />

        </div>
        <div className="relative h-full overflow-hidden">
          {sliderData.map(({ imgSrc, imgAlt, linkHref, linkTitle, description }, index) => (
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              key={index}
            >
              <Link to={linkHref} title={linkTitle}>
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className="object-cover rounded-sm shadow-sm"
                  style={{ height: '220px' }}
                />
              </Link>
              <div className=" bg-white bg-opacity-90 p-1 shadow-sm">
                <h3 className="text-sm leading-5 m-0 min-h-[60px] my-2 mx-2">
                  <Link to={linkHref} title={linkTitle}>
                    <strong className="text-xs text-white bg-red-600 p-1 rounded-sm uppercase font-bold">
                      Watch Live Coverage
                    </strong>
                  </Link>
                  <span className="text-gray-800 text-base font-sans">
                    {description}
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full"
        >
          &#10095;
        </button> 
      </div>
    );
  };

export default WatchSlider;
