import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="fixed w-56 bg-white h-screen p-5 shadow-md flex flex-col items-start border-r border-gray-200">
      <h3 className="mb-8 text-xl font-bold text-gray-800">Video Sharing</h3>
      <ul className="list-none p-0 w-full">
        <li className="mb-4 w-full">
          <Link
            to="/"
            className="block text-gray-600 text-base px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition duration-300"
          >
            Video
          </Link>
        </li>
        <li className="mb-4 w-full">
          <Link
            to="/comment"
            className="block text-gray-600 text-base px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition duration-300"
          >
            Comment
          </Link>
        </li>
        <li className="mb-4 w-full">
          <Link
            to="/user"
            className="block text-gray-600 text-base px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition duration-300"
          >
            User
          </Link>
        </li>
                <li className="mb-4 w-full">
          <Link
            to="/videobanned"
            className="block text-gray-600 text-base px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition duration-300"
          >
            Video Banned
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
