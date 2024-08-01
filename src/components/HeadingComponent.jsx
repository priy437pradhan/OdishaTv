import React from 'react';

const HeadingComponent = ({ title }) => {
  return (
    <div className="flex items-center">
      <h1 className="text-black uppercase text-xl font-bold custom-before">{title}</h1>
    </div>
  );
};

const HeadingComponent2 = ({ title }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-black uppercase text-xl font-bold custom-before">{title}</h1>
      <button className="border border-red-500 text-red-500 bg-transparent px-2 py-1 rounded-2xl hover:bg-red-500 hover:text-white transition text-sm font-bold">
        More
      </button>
    </div>
  );
};

export { HeadingComponent, HeadingComponent2 };
