import React from 'react';
import { Link } from 'react-router-dom';
import LiveNewsCard from '../components/LiveNewsCard';

const NewsList = ({ articles = [
  { id: 1, title: 'Article 1', summary: 'Summary of article 1', image: 'path/to/image1.jpg' },
  { id: 2, title: 'Article 2', summary: 'Summary of article 2', image: 'path/to/image2.jpg' },
  { id: 3, title: 'Article 3', summary: 'Summary of article 3', image: 'path/to/image3.jpg' },
], newsItem = { imageUrl: 'path/to/liveNewsImage.jpg', headline: 'Live News Headline' } }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[6fr_2fr_4fr] gap-6">
      <div className="lg:col-span-1">
        <div className="w-full h-84 mb-4">
          <Link to="/story/live" className="bg-white shadow-md rounded-lg overflow-hidden block mb-2">
            <LiveNewsCard imageUrl={newsItem.imageUrl} headline={newsItem.headline} />
          </Link>
        </div>

        {articles.map((article) => (
          <Link key={article.id} to={`/story/${article.id}`} className="bg-white shadow-md rounded-lg overflow-hidden block mb-2">
            <div className="w-full h-48">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.summary}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="lg:col-span-1 p-4 bg-gray-200">
        <h2 className="text-lg font-semibold mb-4">Placeholder Column 2</h2>
        <p>Content or naming for column 2 goes here.</p>
      </div>

      <div className="lg:col-span-1 p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">Placeholder Column 3</h2>
        <p>Content or naming for column 3 goes here.</p>
      </div>
    </div>
  );
};

export default NewsList;
