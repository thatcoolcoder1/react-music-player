// import React from 'react';
import { FiHome, FiMusic, FiHeart, FiSettings } from 'react-icons/fi';

const SideBar = () => {
  return (
    <div className="w-64 h-[91vh] bg-white/10 backdrop-blur-md text-white p-6 flex flex-col justify-between border-r border-white/20 rounded-r-2xl shadow-lg">
      
      <div>
        <h2 className="text-3xl font-extrabold mb-10 tracking-wide text-purple-300 drop-shadow-md">
          🎵 Player
        </h2>

        <ul className="space-y-3">
          <li className="flex items-center gap-4 hover:bg-white/10 transition-colors p-3 rounded-lg cursor-pointer hover:shadow-md">
            <FiHome className="text-lg" /> <span className="text-sm font-medium">Home</span>
          </li>
          <li className="flex items-center gap-4 hover:bg-white/10 transition-colors p-3 rounded-lg cursor-pointer hover:shadow-md">
            <FiMusic className="text-lg" /> <span className="text-sm font-medium">Library</span>
          </li>
          <li className="flex items-center gap-4 hover:bg-white/10 transition-colors p-3 rounded-lg cursor-pointer hover:shadow-md">
            <FiHeart className="text-lg" /> <span className="text-sm font-medium">Favorites</span>
          </li>
        </ul>
      </div>

      <div>
        <ul className="space-y-3">
          <li className="flex items-center gap-4 hover:bg-white/10 transition-colors p-3 rounded-lg cursor-pointer hover:shadow-md">
            <FiSettings className="text-lg" /> <span className="text-sm font-medium">Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
