import React from 'react';
import { Link } from 'react-router-dom';
import LiveNewsCard from '../components/LiveNewsCard';
import testing from '../assets/testing.jpg';
import SingleCard from '../components/SingleCard';
import LiveSubCard from '../components/LiveSubCard';

const NewsList = ({
  liveNewsItem = { imageUrl: testing, headline: 'Live News Headline' },
  singleCardItem = [
    { id: 1, imageUrl: testing, headline: 'Single News Headline 1' },
    { id: 2, imageUrl: testing, headline: 'Single News Headline 2' },
    { id: 3, imageUrl: testing, headline: 'Single News Headline 3' },
    { id: 4, imageUrl: testing, headline: 'Single News Headline 4' },
    { id: 5, imageUrl: testing, headline: 'Single News Headline 5' },
  ],
  liveSubCardItem = [
    { id: 11, imgSrc: testing, title: 'Live Subcard News Headline 1', content: 'xxxxxxxxx' },
    { id: 12, imgSrc: testing, title: 'Live Subcard News Headline 2', content: 'xxxxxxxxx' },
    { id: 14, imgSrc: testing, title: 'Live Subcard News Headline 3', content: 'xxxxxxxxx' },
    { id: 15, imgSrc: testing, title: 'Live Subcard News Headline 4', content: 'xxxxxxxxx' },
    { id: 16, imgSrc: testing, title: 'Live Subcard News Headline 5', content: 'xxxxxxxxx' },
    { id: 17, imgSrc: testing, title: 'Live Subcard News Headline 6', content: 'xxxxxxxxx' },
    { id: 18, imgSrc: testing, title: 'Live Subcard News Headline 7', content: 'xxxxxxxxx' },
    { id: 19, imgSrc: testing, title: 'Live Subcard News Headline 8', content: 'xxxxxxxxx' },
  ],
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_6fr_3fr] gap-6 mt-12 lg:mt-56 px-4 lg:px-0">
      <div className="lg:col-span-1">
        {singleCardItem.map((item) => (
          <Link key={item.id} to={`/story/${item.id}`} className="overflow-hidden block mb-2">
            <SingleCard imageUrl={item.imageUrl} headline={item.headline} />
          </Link>
        ))}
      </div>
      <div className="lg:col-span-1">
        <div className="w-full mb-8">
          <Link to="/story/live" className="bg-white shadow-md rounded-sm overflow-hidden block mb-2">
            <LiveNewsCard imageUrl={liveNewsItem.imageUrl} headline={liveNewsItem.headline} />
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {liveSubCardItem.map((item) => (
              <Link key={item.id} to={`/story/${item.id}`} className="overflow-hidden block mb-2">
                <LiveSubCard title={item.title} content={item.content} imgSrc={item.imgSrc} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Placeholder Column 3</h2>
        <p>Content or naming for column 3 goes here.</p>
      </div>
    </div>
  );
};

export default NewsList;
