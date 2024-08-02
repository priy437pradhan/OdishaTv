import React, { useEffect, useState } from 'react';
import SingleCard from '../Cards/SingleCard';
import LiveNewsCard from '../Cards/LiveNewsCard';
import WatchSlider from '../Cards/WatchSlider';
import LiveSubCardOne from '../Cards/LiveSubCardOne';
import { AdType1 } from '../Cards/Advertisement';
import CardOne from '../Cards/CardOne';
import Opinion from '../Cards/OpinionCard';
import { HeadingComponent2 } from './HeadingComponent';
import CardTwo from '../Cards/CardTwo';
import CardThree from '../Cards/CardThree';
import WebStoryCard from '../Cards/WebstoryComponent';
import sampleData from '../lib/sampleData';

const NewsList = () => {
  const [WatchItem, setWatchItem] = useState([]);
  const [SpotLightNewsItem, setSpotLightNewsItem] = useState([]);
  const [liveNewsItem, setLiveNewsItem] = useState([]);
  const [Topstories, setTopStories] = useState([]);
  const [Firststories, setFirstStories] = useState([]);
  const [Secondstories, setSecondStories] = useState([]);
  const [Mainstories, setMainStories] = useState([]);
  const [cardOneData, setCardOneData] = useState([]);
  const [cardTwoData, setCardTwoData] = useState([]);
  const [cardThreeData, setCardThreeData] = useState([]);
  const [singleCardItemOne, setSingleCardItemOne] = useState([]);
  const [singleCardItemTwo, setSingleCardItemTwo] = useState([]);
  const [opiniondata, setOpinionData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        const data = sampleData;

        const getSectionData = (sectionName) => {
          return data.filter(article => article.section === sectionName).map(article => ({
            id: article.id,
            headline: article.title,
            imageSrc: article.urlToImage,
            category: article.category,
          }));
        };

        setWatchItem(getSectionData('watch_card'));
        setSpotLightNewsItem(getSectionData('SpotLight_card'));
        setTopStories(getSectionData('Topstories_card'));
        setFirstStories(getSectionData('FirstStories_card'));
        setSecondStories(getSectionData('SecondStories_card'));
        setMainStories(getSectionData('Mainstories_card'));
        setCardOneData(getSectionData('TopTrending_card'));
        setCardTwoData(getSectionData('cardTwoData_card'));
        setCardThreeData(getSectionData('cardThreeData_card'));
        setSingleCardItemOne(getSectionData('singleCardItemOne_card'));
        setSingleCardItemTwo(getSectionData('singleCardItemTwo_card')); 
        setLiveNewsItem(getSectionData('liveNewsItem_card'));
        setOpinionData(getSectionData('opiniondata_card'));

        // const liveNewsData = getSectionData('liveNewsItem_card');
        // const singleCardOneData = getSectionData('singleCardItemOne_card');
        // const singleCardTwoData = getSectionData('singleCardItemTwo_card');

        // console.log('Live News Data:', liveNewsData);
        // console.log('Single Card One Data:', singleCardOneData);
        // console.log('Single Card Two Data:', singleCardTwoData);

        // setLiveNewsItem(liveNewsData);
        // setSingleCardItemOne(singleCardOneData);
        // setSingleCardItemTwo(singleCardTwoData);

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
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_6fr_3fr] gap-6 px-4 lg:px-0">
        <div className="lg:col-span-1">
      
          <WatchSlider />

          <div className="p-2 bg-white shadow-md rounded-sm overflow-hidden block mb-4">
            <HeadingComponent2 title="Top Trending" />
            {cardOneData.map((item) => (
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
            <div className="bg-white shadow-md rounded-sm overflow-hidden block mb-2">
            {SpotLightNewsItem.map((liveNews) => (
                <div key={liveNews.id} >
                  <LiveNewsCard
                    headline={liveNews.headline}
                    imageSrc={liveNews.imageSrc}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-[6fr_6fr] gap-4 py-4">
              {liveNewsItem.map((liveNews) => (
                <div key={liveNews.id} className="col-span-1">
                  <LiveSubCardOne
                    headline={liveNews.headline}
                    imageSrc={liveNews.imageSrc}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap -mx-2 py-2">
              {Topstories.map((story) => (
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
              <div className="flex flex-col bg-white shadow-md">
                {singleCardItemOne.map((story) => (
                  <div key={story.id} className="p-2 w-full">
                    <SingleCard
                      headline={story.headline}
                      imageUrl={story.imageSrc}
                      isLast={story.id === singleCardItemOne[singleCardItemOne.length - 1].id}
                    />
                  </div>
                ))}
              </div>
              <div className="col-span-1">
                <div className="flex flex-wrap">
                  {Firststories.map((story) => (
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
                  {Secondstories.map((story) => (
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
              <div className="flex flex-col bg-white shadow-md">
                {singleCardItemTwo.map((story) => (
                  <div key={story.id} className="p-2 w-full">
                    <SingleCard
                      headline={story.headline}
                      imageUrl={story.imageSrc}
                      isLast={story.id === singleCardItemTwo[singleCardItemTwo.length - 1].id}
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
            {cardThreeData.map((item) => (
              <CardThree
                key={item.id}
                headline={item.headline}
                imageSrc={item.imageSrc}
                category={item.category}
              />
            ))}
          </div>
          <div className="my-2">
            {cardTwoData.map((item) => (
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
      <div className="mx-1 w-full my-5">
        <HeadingComponent2 title="Opinion" />
      </div>
      <div className="p-2 shadow-md mb-4 flex flex-wrap">
        {opiniondata.map((item, index) => (
          <Opinion
            key={item.id}
            id={item.id}
            headline={item.headline}
            imageSrc={item.imageSrc}
            category={item.category}
            isLast={index === opiniondata.length - 1}
          />
        ))}
      </div>
      <div className="mx-1 w-full my-5">
        <HeadingComponent2 title="Web Stories" />
      </div>
      <div className="grid my-2 grid-cols-5 gap-4">
        {Mainstories.map((story) => (
          <div key={story.id}>
            <WebStoryCard
              headline={story.headline}
              imageSrc={story.imageSrc}
              link={`/story/${story.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
