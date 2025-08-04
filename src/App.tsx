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
      <header className="z-40 relative flex items-center justify-between px-4 py-4 backdrop-blur-md bg-white/10 text-[#010f10] font-bold shadow-md">
        {/* Menu Toggle (visible on mobile only) */}
        <button
          className="lg:hidden text-2xl text-[#010f10]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FiMenu />
        </button>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl tracking-wide mx-auto lg:mx-0 text-purple-300 drop-shadow-md">
          MUSIC PLAYER
        </h1>

        {/* Placeholder for spacing */}
        <div className="w-6 lg:hidden" />
      </header>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className={`
            fixed top-0 left-0 z-30 h-full transition-transform duration-300 bg-black bg-opacity-90 p-4 pt-[4rem]
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            w-2/3 sm:w-1/2 md:w-1/3 lg:static lg:translate-x-0 lg:block lg:w-1/5
          `}
        >
          <SideBar />
        </aside>

        {/* Overlay when sidebar is open */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* Main content */}
        <main className="flex-1 flex flex-col justify-between items-center px-4 py-6 lg:ml-0">
          <div className="flex-1 w-full" />
          <div className="w-full max-w-md">
            <MusicPlayer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
