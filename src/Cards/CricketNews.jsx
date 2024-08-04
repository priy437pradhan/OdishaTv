import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newsArticles, photos, videos } from '../lib/sampleData';
import { HeadingComponent2 } from '../components/HeadingComponent';
const getSectionData = (sectionName) => {
  const data = {
    News: newsArticles,
    Photos: photos,
    Videos: videos
  };

  return data[sectionName]?.map(article => ({
    id: article.id,
    headline: article.title,
    imageSrc: article.urlToImage,
    category: article.category,
    description: article.description,
    url: article.url
  })) || [];
};

const Tab = ({ label, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`py-2 px-4 cursor-pointer ${isActive ? 'text-black font-bold border-b-4 border-green-600' : 'text-gray-600'}`}
  >
    {label}
  </div>
);

const NewsCard = ({ article }) => (
  <div key={article.id} className="bg-white border rounded-lg overflow-hidden">
    <Link to={`/story/${article.headline}`} className="block">
      <img src={article.imageSrc} alt={article.headline} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{article.headline}</h3>
        <p>{article.description}</p>
      </div>
    </Link>
  </div>
);

const PhotoCard = ({ photo }) => (
  <div key={photo.id} className="bg-white border rounded-lg overflow-hidden">
    <Link to={`/story/${photo.id}`} className="block">
      <img src={photo.imageSrc} alt={photo.headline} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{photo.headline}</h3>
      </div>
    </Link>
  </div>
);

const VideoCard = ({ video }) => (
  <div key={video.id} className="bg-white border rounded-lg overflow-hidden">
    <Link to={`/story/${video.id}`} className="block">
    <img src={video.imageSrc} alt={video.headline} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{video.headline}</h3>
      </div>
    </Link>
  </div>
);

const CricketNews = () => {
  const [activeTab, setActiveTab] = useState('News');

  const renderContent = (section) => {
    const sectionData = getSectionData(section);
    switch (section) {
      case 'News':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sectionData.map(article => <NewsCard key={article.id} article={article} />)}
          </div>
        );
      case 'Photos':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sectionData.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
          </div>
        );
      case 'Videos':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sectionData.map(video => <VideoCard key={video.id} video={video} />)}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="mb-4">
       <div className="w-full px-2 mt-2 mb-5">
         <HeadingComponent2 title="cricket news" />
      </div>
      <div className="container mx-auto">
        <div className="bg-white p-2 rounded-md">
          <div className="flex border-b border-gray-300">
            {['News', 'Photos', 'Videos'].map((tab) => (
              <Tab
                key={tab}
                label={tab}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </div>
          <div className="mt-4">
            {renderContent(activeTab)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CricketNews;
