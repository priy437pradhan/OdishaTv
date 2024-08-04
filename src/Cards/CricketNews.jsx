import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const newsArticles = [
  {
    id: 1,
    title: "Go First Insolvency: What Should The Airline Do Next to The Highway?",
    image: "https://www.hindustantimes.com/ht-img/img/2024/06/25/148x111/hardik_pant_rohit_1719304368799_1719304379631.jpg"
  },
  {
    id: 2,
    title: "Go First Insolvency: What Should The Airline Do Next to The Highway?22",
    image: "https://www.hindustantimes.com/ht-img/img/2024/06/25/148x111/Congress-leader-and-MP-Rahul-Gandhi--File-Photo-_1718886042847_1719295552589.jpg"
  }
];

const photos = [
  {
    id: 1,
    title: "Photo 1",
    image: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    title: "Photo 2",
    image: "https://via.placeholder.com/300"
  }
];

const videos = [
  {
    id: 1,
    title: "Video 1",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Video 2",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

const CricketNews = () => {
  const [activeTab, setActiveTab] = useState('News');

  return (
    <section className="mb-8">
      <div className="container mx-auto">
        <div className="bg-white p-2 rounded-md">
          <div className="flex border-b border-gray-300">
            {['News', 'Photos', 'Videos'].map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 cursor-pointer ${activeTab === tab ? 'text-black font-bold border-b-4 border-green-600' : 'text-gray-600'}`}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="mt-4">
            {activeTab === 'News' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {newsArticles.map(article => (
                  <div key={article.id} className="bg-white border rounded-lg overflow-hidden">
                    <Link to="#" className="block">
                      <img src={article.image} alt={article.title} className="w-full h-52 object-cover"/>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{article.title}</h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'Photos' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map(photo => (
                  <div key={photo.id} className="bg-white border rounded-lg overflow-hidden">
                    <img src={photo.image} alt={photo.title} className="w-full h-52 object-cover"/>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{photo.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'Videos' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {videos.map(video => (
                  <div key={video.id} className="bg-white border rounded-lg overflow-hidden">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{video.title}</h3>
                      <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Watch Video</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CricketNews;
