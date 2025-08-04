import SideBar from "./components/SideBar";
import MusicPlayer from "./components/MusicPlayer";
import "./index.css";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[url(./assets/5.jpg)] bg-cover bg-center text-white flex flex-col">
      {/* Header */}
      <div className="text-[#010f10] text-2xl sm:text-3xl flex justify-center py-4 font-bold">
        MUSIC PLAYER
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <SideBar />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col justify-between items-center px-4 py-6">
          {/* Top spacer */}
          <div className="flex-1 w-full" />

          {/* MusicPlayer at bottom center */}
          <div className="w-full max-w-md">
            <MusicPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
