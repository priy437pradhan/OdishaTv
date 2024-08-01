import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sampleData from '../lib/sampleData'; 
import { Link } from 'react-router-dom';
import { AdType1 } from '../Cards/Advertisement';
import CardOne from '../Cards/CardOne';

const ITEMS_PER_PAGE = 5;

const CategoryListing = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardOneData, setCardOneData] = useState([]);
  const [error, setError] = useState(null);

  const filteredData = sampleData.filter(item => item.category.toLowerCase() === category.toLowerCase());
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  useEffect(() => {
    try {
      const data = sampleData;
      setCardOneData(data.slice(6, 9).map((article) => ({
        id: article.id,
        headline: article.title,
        imageSrc: article.urlToImage,
        category: article.category,
      })));
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error);
    }
  }, []);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-9/12 p-4">
        <h1 className="text-2xl font-bold mb-4">
          {category.charAt(0).toUpperCase() + category.slice(1)} Listings
        </h1>
        <div className="space-y-4">
          {paginatedData.length > 0 ? (
            paginatedData.map(item => (
              <div key={item.id} className="flex border rounded-sm overflow-hidden h-40">
                <Link to={`/CardOne/${item.id}`} className="flex-shrink-0">
                  <img 
                    src={item.urlToImage} 
                    alt={item.title} 
                    className="w-32 h-32 object-cover rounded-sm"
                    style={{ aspectRatio: '1 / 1' }} 
                  />
                </Link>
                <div className="flex flex-col justify-between ml-4 p-3 flex-1">
                  <div>
                    <Link to={`/CardOne/${item.id}`}>
                      <h2 className="text-sm font-bold mb-2">{item.title}</h2>
                    </Link>
                  </div>
                  <p className="text-gray-600 mt-auto">{item.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No listings available for this category.</p>
          )}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button 
            onClick={handlePreviousPage} 
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <div className="w-full md:w-3/12 p-4">
        <h2 className="text-xl font-bold mb-4">Related Data</h2>
        <AdType1 />
        <div className='my-4'>
        <h2 className="text-xl font-bold">Latest News</h2>
        {cardOneData.slice(0, 11).map(item => (
          <CardOne
            key={item.id}
            id={item.id}
            headline={item.headline}
            imageSrc={item.imageSrc}
            category={item.category}
            
          />
        ))}
        </div>
        <AdType1 />
      </div>
    </div>
  );
};

export default CategoryListing;
