import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link to="/" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-transparent mx-1.5 sm:mx-6">Home</Link>
        <Link to="/meet" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" target="_blank" rel="noopener noreferrer">Meet</Link>
      </div>
    </nav>
  );
}

export default NavBar;
