import { useState } from "react";
import SideBar from "./components/SideBar";
import MusicPlayer from "./components/MusicPlayer";
import { FiMenu } from "react-icons/fi";
import "./index.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[url(./assets/5.jpg)] bg-cover bg-center text-white flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 backdrop-blur-md bg-white/10 text-[#010f10] font-bold shadow-md">
        {/* Menu Toggle (visible on mobile only) */}
        <button
          className="lg:hidden text-2xl text-[#010f10]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FiMenu />
        </button>

<h1 className="text-2xl sm:text-3xl tracking-wide mx-auto lg:mx-0 text-purple-300 drop-shadow-md">
  MUSIC PLAYER
</h1>



        {/* Placeholder to keep spacing consistent */}
        <div className="w-6 lg:hidden" />
      </div>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <div
          className={`
            fixed top-0 left-0 h-full z-30 transition-transform bg-black bg-opacity-90 p-4
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            w-2/3 sm:w-1/3 md:w-1/4 lg:static lg:translate-x-0 lg:block lg:w-1/5
          `}
        >
          <SideBar />
        </div>

        {/* Overlay when sidebar is open */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-between items-center px-4 py-6 lg:ml-0">
          <div className="flex-1 w-full" />
          <div className="w-full max-w-md">
            <MusicPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
