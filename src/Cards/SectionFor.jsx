import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Forhome, ForProfile, ForcontactData } from '../lib/sampleData';
import { HeadingComponent2 } from '../components/HeadingComponent';

const SectionForYou = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', data: Forhome },
    { id: 'profile', label: 'Profile', data: ForProfile },
    { id: 'contact', label: 'Contact', data: ForcontactData },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='mb-4'>
      <div className="w-full px-2 mt-2 mb-5">
        <HeadingComponent2 title="Section for You" />
      </div>
      <div className="section-tab">
        <ul className="nav section-tab-menu flex overflow-x-auto mb-4 list-none p-0">
          {tabs.map((tab) => (
            <li className="nav-item flex-shrink-0" key={tab.id}>
              <button
                className={`nav-link px-4 py-2 text-gray-700 rounded ${activeTab === tab.id ? 'bg-white border-2 border-gray-300' : 'bg-transparent'}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabs.map((tab) => (
            <div key={tab.id} className={`tab-pane ${activeTab === tab.id ? 'block' : 'hidden'}`}>
              <div className="flex flex-wrap">
                {tab.data.map((item, index) => (
                  <div className="w-full lg:w-1/3 p-2" key={index}>
                    <div className="st-card-eleven bg-white relative rounded shadow-md overflow-hidden">
                      <Link to={`/story/${encodeURIComponent(item.title)}`} title={item.title}>
                        <img
                          src={item.imgSrc}
                          alt={item.imgAlt || 'Image description'}
                          title={item.imgTitle}
                          className="w-full h-56 object-cover"
                        />
                      </Link>
                      <Link to={`/story/${encodeURIComponent(item.title)}`} title={item.title}>
                        <h3 className="text-black text-lg font-bold p-4">
                          {item.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionForYou;
