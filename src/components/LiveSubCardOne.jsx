// src/components/NewsCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import testing from '../assets/testing.jpg'

const liveSubCardOne = [
  {
    id: 1,
    title: "Go First Insolvency: What Should The Airline Do Next to The Highway?19",
    imageUrl: testing,
    category: "cricket"
  },
  {
    id: 2,
    title: "Another News Title",
    imageUrl: testing,
    category: "football"
  },
];

const LiveSubCardOne = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      {liveSubCardOne.map((news) => (
        <div key={news.id} className="w-full lg:w-1/2 px-4 h-64">
          <div className="bg-white h-full relative pb-6 shadow-md rounded-sm"> 
            <Link to={`/news/${news.id}`} title={news.title}>
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-auto object-cover rounded-t-sm" 
              />
            </Link>
            <Link to={`/news/${news.id}`} title={news.title}>
              <h2 className="text-black text-lg font-bold px-4 pt-4 pb-2 max-h-20 overflow-hidden">{news.title}</h2>
            </Link>
            <ul className="px-4">
              <li className="list-none text-xs text-gray-700 uppercase">
                <Link to={`/category/${news.category}`} title={news.category} className="text-blue-700 font-semibold">{news.category}</Link>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveSubCardOne;
