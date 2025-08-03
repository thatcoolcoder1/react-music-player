import SideBar from "./components/SideBar";
import MusicPlayer from "./components/MusicPlayer";
import "./index.css";

const App = () => {
  return (
    <div className="w-full h-screen bg-[url(./assets/5.jpg)] bg-cover bg-center text-white flex flex-col">
      {/* Header */}
      <div className="text-[#010f10] text-3xl flex justify-center py-4 font-bold">
        MUSIC PLAYER
      </div>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SideBar />

        {/* Main content area with MusicPlayer at bottom center */}
        <div className="flex flex-1 flex-col justify-between items-center px-4 py-6">
          {/* You can add top content here if needed */}
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
