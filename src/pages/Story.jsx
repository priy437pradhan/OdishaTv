import React from 'react';
import { useParams } from 'react-router-dom';

const Story = () => {
  const { id } = useParams();
  const article = { title: 'Article ', content: 'Full content of article ' };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Story;
