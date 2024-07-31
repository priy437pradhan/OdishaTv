import React from 'react';

const HeadingComponent = ({ title }) => {
  return (
    <div className="flex items-center">
      <h1 className="text-black uppercase text-xl font-bold custom-before">{title}</h1>

      </div>
  );
};

const HeadingComponent2 = () => {
  return (
    <div>HeadingComponent2</div>
  );
};

export { HeadingComponent, HeadingComponent2 };
