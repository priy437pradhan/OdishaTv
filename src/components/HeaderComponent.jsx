import React, { useEffect, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import facebook_img from "../assets/facebook-bn.png";
import insta_img from "../assets/insta.png";
import koko_img from "../assets/Koko.png";
import twitter_img from "../assets/twitter-header.png";
import whatsapp_img from "../assets/whatsapp.png";
import youtube_img from "../assets/youtube.png";
import white_logo from "../assets/logo-white.png";
import DarkModeToggle from '../components/DarkModeToggle';
import SearchData from "../components/SearchData";
import SearchItem from "../components/SearchItems";
import "../App.css";


const categories = [
  { name: "World", path: "/world" },
  { name: "Politics", path: "/politics" },
  { name: "Business", path: "/business" },
  { name: "Technology", path: "/technology" },
  { name: "Sports", path: "/sports" },
  { name: "Health", path: "/health" },
  { name: "Education", path: "/education" },
  { name: "Environment", path: "/environment" },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Religion", path: "/religion" },
  { name: "Entertainment", path: "/entertainment" },
];

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const thirdRow = document.getElementById("third-row");
      const stickyThreshold = 140; 
      if (window.scrollY >= stickyThreshold) {
        thirdRow.classList.add("sticky");
      } else {
        thirdRow.classList.remove("sticky");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-white shadow-lg">
      <div className="hidden md:flex justify-between items-center bg-white border-b-2 p-2">
        <div className="flex space-x-4">
        <Link to="#">
        <img className="h-5 separator hover:opacity-75 transition-opacity duration-300" src={facebook_img} alt="Facebook" />
      </Link>
      <Link to="#">
        <img className="h-5 separator hover:opacity-75 transition-opacity duration-300" src={insta_img} alt="Instagram" />
      </Link>
      <Link to="#">
        <img className="h-5 separator hover:opacity-75 transition-opacity duration-300" src={koko_img} alt="Koko" />
      </Link>
      <Link to="#">
        <img className="h-5 separator hover:opacity-75 transition-opacity duration-300" src={twitter_img} alt="Twitter" />
      </Link>
      <Link to="#">
        <img className="h-5 separator hover:opacity-75 transition-opacity duration-300" src={whatsapp_img} alt="WhatsApp" />
      </Link>
      <Link to="#">
        <img className="h-5 hover:opacity-75 transition-opacity duration-300" src={youtube_img} alt="YouTube" />
      </Link>
        </div>
        
      </div>

      <div className="relative bg-white flex justify-center border-b-2 py-4">
        <div className="absolute top-0 left-0 lg:text-lg hidden md:flex text-sm text-gray-400 p-2">
          <span>{dateTime.toLocaleDateString()}</span> |
          <span>{dateTime.toLocaleTimeString()}</span>
        </div>
        <div className="flex-grow flex justify-center items-center">
        <Link to={`/`}>
          <img
           className="lg:h-20 md:h-16 sm:h-12 sm:flex sm:justify-start sm:align-top h-8 w-auto"
            src={logo}
            alt="Logo"
          />
           </Link>
        </div>

        <div className="absolute bottom-5 right-20 flex items-center font-semibold text-gray-500 text-sm leading-5 uppercase hidden md:flex">
          <Link
            to="/livetv"
            className="inline-flex items-center font-semibold text-black text-lg leading-5 uppercase no-underline mr-4 relative"
          >
            live tv
            <span className="absolute left-[-25px] top-1 h-3 w-3 bg-red-600 rounded-full shadow-[0_0_0_0_rgba(244,176,27,0.7)] animate-pulse"></span>
          </Link>
          {/* <img className="h-8 w-auto" src={darkmode_img} alt="Dark View" /> */}
          <DarkModeToggle />
        </div>
      </div>

      <div
  id="third-row"
  className="flex justify-between items-center h-18 bg-white border-b-2 text-black py-1 px-2"
>
  <div className="relative flex-1 flex lg:justify-center overflow-x-auto space-x-4">
    <Link to="/" className="text-lg whitespace-nowrap">
      <img src={white_logo} alt="White Logo" />
    </Link>
    {categories.map((category, index) => (
      <Link
        key={index}
        to={`/category/${category.name.toLowerCase()}`}
        className="text-lg whitespace-nowrap"
      >
        {category.name}
      </Link>
    ))}
  <div className="flex h-18 bg-white items-center justify-center space-x-4 shadow-sm p-1 fixed top-0 right-0 z-[20]">
          <SearchData/>
          <SearchItem />
    </div>
  </div>
</div>
    </header>
  );
};

export default Header;
