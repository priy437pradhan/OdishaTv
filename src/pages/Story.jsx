import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleData } from '../lib/sampleData'; 
import { sliderData } from '../Cards/WatchSlider';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const StoryPage = () => {
  const { id } = useParams();
  const storyItem = sampleData.find(item => item.id === parseInt(id)) ||
                    sliderData.find(item => item.id === parseInt(id));

  if (!storyItem) {
    return <div className="p-4">Story not found</div>;
  }

  return (
    <Helmet>
    <div className="flex flex-wrap">
      <div className='pb-2 border-b-2 border-dashed dark:border-gray-700'>
        <h1 className="text-4xl font-semibold mb-4">{storyItem.title}</h1>
        <p className='text-lg'>{storyItem.storyIntro}</p>
      </div>
      <div className="w-full md:w-2/3 py-4">
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-4">
            Published on {new Date(storyItem.publishedAt).toLocaleDateString()}
            <br />
            <span className="text-gray-800">By {storyItem.author || 'Unknown Author'}</span>
          </p>
          <img 
            src={storyItem.urlToImage} 
            alt={storyItem.title} 
            className="w-full h-auto mb-4"
            style={{ aspectRatio: '16 / 9' }} 
          />

          <div className="flex space-x-4 mb-6">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-blue-600 hover:text-blue-700" size={24} />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 hover:text-blue-500" size={24} />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-blue-700 hover:text-blue-800" size={24} />
            </a>
            <a href={`https://www.instagram.com`} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 hover:text-pink-600" size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
          {sliderData.map((item, index) => (
            <div key={index} className="mb-4">
              <Link to={`/story/${item.id}`} className="text-blue-500 hover:underline">
                {item.title}
              </Link>
            </div>
          ))}
        </div> 
      </div>
      
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Trending Stories</h2>
          <ul>
            {sliderData.map((item, index) => (
              <li key={index}>
                <Link to={`/story/${item.id}`} className="text-blue-500 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div> 
      </div>
    </div>
    </Helmet>
  );
};

export default StoryPage;
