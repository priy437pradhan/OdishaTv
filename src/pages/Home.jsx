import React from 'react';
import { Link } from 'react-router-dom';

const NewsList = ({ articles =[
  { title: 'Article 1', summary: 'Summary of article 1', image: 'path/to/image1.jpg' },
  { title: 'Article 2', summary: 'Summary of article 2', image: 'path/to/image2.jpg' },
  { title: 'Article 3', summary: 'Summary of article 3', image: 'path/to/image3.jpg' },
] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_7fr_3fr] gap-6">
      {/* Column 1: Article List */}
      <div className="lg:col-span-2">
        {articles.map((article, index) => (
          <Link
            key={index}
            to={`/story/${index + 1}`}
            className="bg-white shadow-md rounded-lg overflow-hidden block mb-6"
          >
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

      {/* Column 2: Placeholder */}
      <div className="hidden lg:block lg:col-span-1 p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">Placeholder Column 1</h2>
        <p>Content or naming for column 2 goes here.</p>
      </div>

      {/* Column 3: Placeholder */}
      <div className="hidden lg:block lg:col-span-1 p-4 bg-gray-200">
        <h2 className="text-lg font-semibold mb-4">Placeholder Column 2</h2>
        <p>Content or naming for column 3 goes here.</p>
      </div>
    </div>
  );
};

export default NewsList;
