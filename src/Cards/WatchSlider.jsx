import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import watch1 from '../assets/watch.jpg';
import watch2 from '../assets/watch2.jpg';
import watch3 from '../assets/watch3.jpg';
import { HeadingComponent } from '../components/HeadingComponent';

export const sliderData = [
  {
    urlToImage: watch1,
    imgAlt: 'Watch Live Coverage',
    title: 'Insolvency: What Should The Airline Do Next',
  },
  {
    urlToImage: watch2,
    imgAlt: 'Watch Live Coverage',
    title: 'Go First Should The Airline Do Next',
  },
  {
    urlToImage: watch3,
    imgAlt: 'Watch Live Coverage',
    title: 'First Insolvency: What Should The Airline Do Next',
  },
];

export const WatchSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 5000);

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
    <div className="relative bg-white mb-4 h-80 shadow-md">
      <div className="p-2">
        <HeadingComponent title="watch" />
      </div>
      <div className="relative h-full overflow-hidden">
        {sliderData.map(({ urlToImage, title }, index) => (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            key={index}
          >
            <Link to={`/story/${encodeURIComponent(title)}`}>
              <img
                src={urlToImage}
                alt={title}
                className="object-cover rounded-sm shadow-sm"
                style={{ height: '190px' }}
              />
            </Link>
            <div className="bg-white bg-opacity-90 p-1 shadow-sm">
              <h3 className="text-sm leading-5 m-0 min-h-[60px] my-2 mx-2">
                <Link to={`/story/${encodeURIComponent(title)}`}>
                  <strong className="text-xs text-white bg-red-600 p-1 rounded-sm uppercase font-bold">
                    Watch Live Coverage
                  </strong>
                </Link>
                <span className="text-gray-800 text-base font-sans">{title}</span>
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

export default { WatchSlider, sliderData };
