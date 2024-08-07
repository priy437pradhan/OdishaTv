// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { sampleData } from '../lib/sampleData';

// const ITEMS_PER_PAGE = 5;

// const TagListing = () => {
//   const { tag } = useParams();
//   const [currentPage, setCurrentPage] = useState(1);

//   const filteredData = sampleData.filter(item =>
//     item.primaryTag.toLowerCase() === tag.toLowerCase() ||
//     item.secondaryTag.toLowerCase() === tag.toLowerCase()
//   );
//   const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(prevPage => prevPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(prevPage => prevPage + 1);
//     }
//   };

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const paginatedData = filteredData.slice(startIndex, endIndex);

//   return (
//     <div className="flex flex-wrap">
//       <div className="w-full md:w-9/12 p-4 mb-4 border-2 dark:border-slate-700">
//         <div className='flex justify-between'>
//           <h1 className="text-2xl font-bold mb-4">
//             {tag.charAt(0).toUpperCase() + tag.slice(1)} Listings
//           </h1>
//           <div>
//             dropdown list here
//           </div>
//         </div>
//         <div className="space-y-4">
//           {paginatedData.length > 0 ? (
//             paginatedData.map(item => (
//               <div key={item.id} className="flex pb-8 rounded-sm overflow-hidden p-2 border dark:border dark:border-slate-600">
//                 <Link to={`/story/${encodeURIComponent(item.id)}`} className="flex-shrink-0">
//                   <img
//                     src={item.urlToImage}
//                     alt={item.title}
//                     className="w-48 h-40 object-cover rounded-sm hover:bg-blue-200 hover:scale-105 hover:shadow-lg transition-all duration-300"
//                     style={{ aspectRatio: '1 / 1' }}
//                   />
//                 </Link>
//                 <div className="relative flex flex-col ml-4 px-1 py-1 flex-1">
//                   <div>
//                     <Link to={`/story/${encodeURIComponent(item.id)}`}>
//                       <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//                     </Link>
//                   </div>
//                   <p className='text-base mb-4'>{item.storyIntro}</p>
//                   <div className='flex items-center absolute bottom-0 -mb-5'>
//                     {item.primaryTag && (
//                       <Link to={`/tag/${item.primaryTag}`}>
//                         <span className="text-gray-600 bg-blue-100 text-sm px-2 py-1 rounded">{item.primaryTag}</span>
//                       </Link>
//                     )}
//                     {item.secondaryTag && (
//                       <Link to={`/tag/${item.secondaryTag}`} className="ml-2">
//                         <span className="text-gray-600 bg-green-100  text-sm px-2 py-1 rounded">{item.secondaryTag}</span>
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No listings available for this tag.</p>
//           )}
//         </div>
//         <div className="flex justify-between items-center mt-10">
//           <button
//             onClick={handlePreviousPage}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <span>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       <div className="w-full md:w-3/12 px-4">
//         <h2 className="text-xl font-bold mb-4">Related Data</h2>
//         <AdType1 />
//       </div>
//     </div>
//   );
// };

// export default TagListing;
