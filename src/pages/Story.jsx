import React from 'react';
import { useParams, Link } from 'react-router-dom';
import sampleData from '../lib/sampleData'; 
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const StoryPage = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const storyItem = sampleData.find(item => item.title === decodedTitle);

  if (!storyItem) {
    return <div className="p-4">Story not found</div>;
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-2/3 p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{storyItem.title}</h1>
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
          <p className="text-lg leading-relaxed mb-4">{storyItem.description}</p>

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
        </div>
      </div>
      
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Trending Stories</h2>
          <ul>
            <li><Link to="/story/trending-story-1" className="text-blue-500 hover:underline">Trending Story 1</Link></li>
            <li><Link to="/story/trending-story-2" className="text-blue-500 hover:underline">Trending Story 2</Link></li>
            <li><Link to="/story/trending-story-3" className="text-blue-500 hover:underline">Trending Story 3</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
