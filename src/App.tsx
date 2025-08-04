import { useState } from "react";
import SideBar from "./components/SideBar";
import MusicPlayer from "./components/MusicPlayer";
import { FiMenu } from "react-icons/fi";
import "./index.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[url(./assets/5.jpg)] bg-cover bg-center text-white flex flex-col">
      
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 backdrop-blur-md bg-white/10 text-[#010f10] font-bold shadow-md">
        {/* Mobile Menu Toggle */}
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

        {/* Spacer to balance flex */}
        <div className="w-6 lg:hidden" />
      </header>

      {/* Body Layout */}
      <main className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className={`
            fixed top-0 left-0 z-30 h-full transition-transform duration-300 bg-black bg-opacity-90 p-4
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            w-2/3 sm:w-1/2 md:w-1/3 lg:static lg:translate-x-0 lg:block lg:w-1/5
          `}
        >
          <SideBar />
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* Main Content */}
        <section className="flex-1 flex flex-col justify-end items-center px-4 py-6">
          <div className="w-full max-w-md">
            <MusicPlayer />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
