import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa'; 

function MobilePopup() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    isMobile && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-sm mx-auto relative">
          <button
            onClick={() => setIsMobile(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
          <p className="text-center text-lg">
            Responsiveness is not available on mobile view.
          </p>
        </div>
      </div>
    )
  );
}

export default MobilePopup;
