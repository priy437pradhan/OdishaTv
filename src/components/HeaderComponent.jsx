import React, { useEffect, useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import darkmode_img from '../assets/dark-mode.png';
import facebook_img from '../assets/facebook-bn.png';
import insta_img from '../assets/insta.png';
import koko_img from '../assets/Koko.png';
import twitter_img from '../assets/twitter-header.png';
import whatsapp_img from '../assets/whatsapp.png';
import youtube_img from '../assets/youtube.png';
import white_logo from '../assets/logo-white.png';
import '../App.css';

const categories = [
  { name: 'Home', path: '/' },
  { name: 'World', path: '/world' },
  { name: 'Politics', path: '/politics' },
  { name: 'Business', path: '/business' },
  { name: 'Technology', path: '/technology' },
  { name: 'Sports', path: '/sports' },
  { name: 'Science/Space', path: '/science-space' },
  { name: 'Health', path: '/health' },
  { name: 'Education', path: '/education' },
  { name: 'Environment', path: '/environment' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Religion', path: '/religion' },

  { name: 'Entertainment', path: '/entertainment' },
  
  
];

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-lg">
      <div className="hidden md:flex justify-between items-center bg-white border-b-2 p-2">
        <div className="flex space-x-4">
          <img className="h-5 separator" src={facebook_img} alt="Facebook" />
          <img className="h-5 separator" src={insta_img} alt="Instagram" />
          <img className="h-5 separator" src={koko_img} alt="Koko" />
          <img className="h-5 separator" src={twitter_img} alt="Twitter" />
          <img className="h-5 separator" src={whatsapp_img} alt="WhatsApp" />
          <img className="h-5" src={youtube_img} alt="YouTube" />
        </div>
        <div className="flex space-x-4 shadow-sm p-2">
          <FaSearch className="font-sans text-lg font-normal cursor-pointer hover:text-gray-300" aria-label="Search" />
          <FaBars className="text-lg font-normal cursor-pointer hover:text-gray-300" aria-label="Menu" />
        </div>
      </div>
      
      <div className="relative bg-white flex justify-center border-b-2   py-4">
        <div className="absolute top-0 left-0 lg:text-lg hidden md:flex text-sm text-gray-400 p-2">
          <span>{dateTime.toLocaleDateString()}</span> | <span>{dateTime.toLocaleTimeString()}</span>
        </div>  
        <div className="flex-grow flex justify-center items-center">
  <img className="lg:h-20 md:h-16 sm:h-12 h-8 w-auto" src={logo} alt="Logo" />
</div>


        <div className="absolute bottom-5 right-20  items-center font-semibold text-gray-500 text-sm leading-5 uppercase hidden md:flex">
  <Link to="/livetv" className="inline-flex items-center font-semibold text-black text-lg leading-5 uppercase no-underline mr-4 relative">
    live tv
    <span className="absolute left-[-25px] top-1 h-3 w-3 bg-red-600 rounded-full shadow-[0_0_0_0_rgba(244,176,27,0.7)] animate-pulse"></span>
  </Link>
  <img className="h-8 w-auto" src={darkmode_img} alt="Dark View" />
</div>

      </div>

      <div className="flex justify-between items-center bg-white border-b-2 text-black py-1 px-2">
        <div className="flex-1 flex lg:justify-center overflow-x-auto space-x-4">
          <img src={white_logo} alt="" />
          {categories.map((category, index) => (
            <Link key={index} to={category.path} className="text-lg whitespace-nowrap hover:underline">
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
