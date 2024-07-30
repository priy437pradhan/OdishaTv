import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CombinedData } from '../lib/Categories';
import { Link } from 'react-router-dom';

const Listing = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const filteredArticles = CombinedData.filter(article => article.category === category);
    setArticles(filteredArticles);
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{category} Listings</h1>
      <div className="custom-grid">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="custom-grid-item">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link
                  to={`/story/${article.id}`}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No articles available</p>
        )}
      </div>
    </div>
  );
};

export default Listing;
