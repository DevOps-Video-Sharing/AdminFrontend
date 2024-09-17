import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="fixed w-56 bg-gray-800 h-screen p-5 shadow-lg flex flex-col items-start border-r border-gray-700">
      <h3 className="mb-8 text-2xl font-semibold text-white">Video Sharing</h3>
      <ul className="list-none p-0 w-full">
        <li className="mb-4 w-full">
          <Link
            to="/"
            className="block text-gray-300 text-lg px-4 py-3 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out"
          >
            Video
          </Link>
        </li>
        <li className="mb-4 w-full">
          <Link
            to="/comment"
            className="block text-gray-300 text-lg px-4 py-3 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out"
          >
            Comment
          </Link>
        </li>
        <li className="mb-4 w-full">
          <Link
            to="/user"
            className="block text-gray-300 text-lg px-4 py-3 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out"
          >
            User
          </Link>
        </li>
        <li className="mb-4 w-full">
          <Link
            to="/videobanned"
            className="block text-gray-300 text-lg px-4 py-3 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out"
          >
            Video Banned
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;