import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCard from '../Cards/SingleCard';
import LiveNewsCard from '../Cards/LiveNewsCard';
import WatchSlider from '../Cards/WatchSlider';
import LiveSubCardOne from '../Cards/LiveSubCardOne';
import { AdType1 } from '../Cards/Advertisement';
import CardOne from '../Cards/CardOne';
import { HeadingComponent2 } from './HeadingComponent';
import CardTwo from '../Cards/CardTwo';
import CardThree from '../Cards/CardThree';
import WebStoryCard from '../Cards/WebstoryComponent';
import sampleData from '../lib/sampleData';

const NewsList = () => {
  const [liveNewsItem, setLiveNewsItem] = useState([]);
  const [stories, setStories] = useState([]);
  const [cardOneData, setCardOneData] = useState([]);
  const [cardTwoData, setCardTwoData] = useState([]);
  const [cardThreeData, setCardThreeData] = useState([]);
  const [singleCardItem, setSingleCardItem] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        const data = sampleData;

        setStories(data.slice(1, 6).map((article, index) => ({
          id: article.id,
          headline: article.title,
          imageSrc: article.urlToImage,
          category: article.category,
        })));
        setCardOneData(data.slice(6, 17).map((article, index) => ({
          id: article.id,
          headline: article.title,
          imageSrc: article.urlToImage,
          category: article.category,
        })));
        setCardTwoData(data.slice(17, 28).map((article, index) => ({
          id: article.id,
          headline: article.title,
          imageSrc: article.urlToImage,
          category: article.category,
        })));
        setCardThreeData(data.slice(28, 29).map((article, index) => ({
          id: article.id,
          headline: article.title,
          imageSrc: article.urlToImage,
          category: article.category,
        })));
        setSingleCardItem(data.slice(29, 35).map((article, index) => ({
          id: article.id,
          imageUrl: article.urlToImage,
          headline: article.title,
        })));
        setLiveNewsItem(data.slice(35, 37).map((article, index) => ({
          id: article.id,
          imageUrl: article.urlToImage,
          headline: article.title,
          category: article.category,
        })));
      } catch (error) {
        setError('Error fetching news data');
        console.error('Error fetching news data:', error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_6fr_3fr] gap-6 px-4 lg:px-0">
      <div className="lg:col-span-1">
        <WatchSlider />
        <div className="p-2 bg-white shadow-md rounded-sm overflow-hidden block mb-4">
          <HeadingComponent2 title="Top Trending" />
          {cardOneData.slice(0, 11).map((item) => (
            <CardOne
              key={item.id}
              id={item.id}
              headline={item.headline}
              imageSrc={item.imageSrc}
              category={item.category}
            />
          ))}
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="w-full">
          <Link to="/story/live" className="bg-white shadow-md rounded-sm overflow-hidden block mb-2">
            <LiveNewsCard imageUrl={liveNewsItem[0]?.imageUrl} headline={liveNewsItem[0]?.headline} />
          </Link>
          <div className="grid grid-cols-[6fr_6fr] gap-4 py-4">
            {liveNewsItem.map((liveNews) => (
              <div key={liveNews.id} className="col-span-1">
                <LiveSubCardOne
                  headline={liveNews.headline}
                  imageSrc={liveNews.imageUrl}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap -mx-2 py-2">
            {stories.slice(0, 3).map((story) => (
              <div key={story.id} className="w-full sm:w-1/3 px-2 mb-4">
                <WebStoryCard
                  headline={story.headline}
                  imageSrc={story.imageSrc}
                  link={`/story/${story.id}`}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[8fr_4fr] gap-4 py-2">
            <div className="flex flex-col shadow-md">
              {singleCardItem.slice(0, 3).map((story) => (
                <div key={story.id} className="p-2 w-full">
                  <SingleCard
                    headline={story.headline}
                    imageUrl={story.imageUrl}
                    isLast={story.id === singleCardItem[singleCardItem.length - 1].id}
                  />
                </div>
              ))}
            </div>
            <div className="col-span-1">
              <div className="flex flex-wrap">
                {stories.slice(3, 4).map((story) => (
                  <div key={story.id} className="w-full px-2 mb-4">
                    <WebStoryCard
                      headline={story.headline}
                      imageSrc={story.imageSrc}
                      link={`/story/${story.id}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[4fr_8fr] gap-4 py-2">
            <div className="col-span-1">
              <div className="flex flex-wrap">
                {stories.slice(4, 5).map((story) => (
                  <div key={story.id} className="w-full px-2 mb-4">
                    <WebStoryCard
                      headline={story.headline}
                      imageSrc={story.imageSrc}
                      link={`/story/${story.id}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col shadow-md">
              {singleCardItem.slice(0, 3).map((story) => (
                <div key={story.id} className="p-2 w-full">
                  <SingleCard
                    headline={story.headline}
                    imageUrl={story.imageUrl}
                    isLast={story.id === singleCardItem[singleCardItem.length - 1].id}
                    id={story.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <AdType1 />
        <div className="bg-white p-2 shadow-md my-2">
          <HeadingComponent2 title="Top Trending" />
          {cardThreeData.slice(0, 1).map((item) => (
            <CardThree
              key={item.id}
              headline={item.headline}
              imageSrc={item.imageSrc}
              category={item.category}
            />
          ))}
        </div>
        <div className="my-2">
          {cardTwoData.slice(0, 7).map((item) => (
            <CardTwo
              key={item.id}
              headline={item.headline}
              imageSrc={item.imageSrc}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
