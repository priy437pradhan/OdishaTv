import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => 
    window.localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <button
    onClick={() => setDarkMode(prevMode => !prevMode)}
    className="p-2 text-white bg-black hover:bg-slate-800  rounded flex items-center justify-center"
  >
    {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
  </button>
  );
};

export default DarkModeToggle;
