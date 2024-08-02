import React from 'react';

const AdType1 = () => {
  return (
    <div className="border text-black p-6 rounded-lg shadow-sm w-full" style={{height:250}}>
      <h2 className="text-2xl font-bold mb-4">Add Type </h2>
      <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, asperiores.</p>
      <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded">Learn More</button>
    </div>
  );
};

const AdType2 = () => {
  return (
    <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-4">Ad Type 2</h2>
      <p className="mb-4">This is the content for Ad Type 2. It has a green background and white text.</p>
      <button className="bg-white text-green-500 font-semibold px-4 py-2 rounded">Learn More</button>
    </div>
  );
};

const AdType3 = () => {
  return (
    <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-4">Ad Type 3</h2>
      <p className="mb-4">This is the content for Ad Type 3. It has a red background and white text.</p>
      <button className="bg-white text-red-500 font-semibold px-4 py-2 rounded">Learn More</button>
    </div>
  );
};

export { AdType1, AdType2, AdType3 };
