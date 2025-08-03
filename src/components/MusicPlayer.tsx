import React, { useState, useEffect } from 'react';
import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from 'react-icons/fi';
import AudioController from './AudioController';
import AddMusic from './AddMusic';
import SongCard from './SongCard';
import { addSongToDB, deleteAllSongsFromDB, getAllSongsFromDB } from '../db/db';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [IsSliding, setIsSliding] = useState(false);
  const [TempTime, setTempTime] = useState<number>();
  const [Playlist, setPlaylist] = useState([{ title: '', source: '' }]); 

  const AddSongs = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    await addSongToDB(file);
    const songsFromDB = await getAllSongsFromDB();

    const formatted = songsFromDB.map((entry: any) => ({
      title: entry.title,
      source: URL.createObjectURL(entry.blob),
    }));

    setPlaylist(formatted);
  };

  useEffect(() => {
    if (Playlist.length === 0 || !Playlist[0].source) return;

    // setIsReady(false);

    AudioController.loadPlaylist(Playlist)
      .then()
      .catch((err) => {
        console.error('Playback error:', err);
        // setIsReady(false);
      });

    AudioController.onTimeUpdate(() => {
      setCurrentTime(AudioController.getCurrentTime());
      setDuration(AudioController.getDuration());
    });

    AudioController.onEnded(() => {
      setIsPlaying(false);
    });
  }, [Playlist]);

  const togglePlayback = () => {
    if (isPlaying) {
      AudioController.pause();
    } else {
      AudioController.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => AudioController.next();
  const handlePrev = () => AudioController.prev();

  const handleClear = async () => {
    AudioController.clear();
    await deleteAllSongsFromDB();
    setPlaylist([]);
    setIsPlaying(false);
  };

  const formatTime = (seconds: number | undefined) =>
    isNaN(seconds as number)
      ? '0:00'
      : `${Math.floor(seconds! / 60)}:${('0' + Math.floor(seconds! % 60)).slice(-2)}`;

  // const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="backdrop-blur-md bg-white/10 text-white px-6 py-6 rounded-2xl shadow-xl border border-white/20 w-[90vw] max-w-md mx-auto">
      {/* Header Actions */}
      <div className="flex justify-end items-center gap-3 mb-4">
        <AddMusic onChange={AddSongs} />
        <button
          onClick={handleClear}
          className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-full shadow-md transition"
        >
          Clear
        </button>
      </div>

      {/* Song List */}
      <div className="mb-6">
        {Playlist.map((song, i) => (
          <SongCard
            key={i}
            title={song.title}
            index={i}
            onClick={() => {
              AudioController.currentIndex = i;
              AudioController.load(song.source);
              AudioController.play();
              setIsPlaying(true);
            }}
          />
        ))}
      </div>

      {/* Now Playing Info */}
      <h2 className="text-xl font-bold mb-1 text-center tracking-wide drop-shadow-sm">
        Now Spinning
      </h2>
      <p className="text-sm text-gray-200 mb-6 text-center">Song Title - Artist</p>

      {/* Player Controls */}
      <div className="flex items-center justify-center gap-8 mb-6">
        <button className="text-2xl hover:text-purple-400 transition" onClick={handlePrev}>
          <FiSkipBack />
        </button>
        <button
          onClick={togglePlayback}
          className="text-3xl p-4 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg transition"
        >
          {isPlaying ? <FiPause /> : <FiPlay />}
        </button>
        <button className="text-2xl hover:text-purple-400 transition" onClick={handleNext}>
          <FiSkipForward />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full flex items-center gap-3 text-sm text-gray-300">
        <span className="w-10 text-right">
          {formatTime(IsSliding ? TempTime : currentTime)}
        </span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={IsSliding ? TempTime : currentTime || 0}
          onChange={(e) => setTempTime(Number(e.target.value))}
          onMouseDown={() => setIsSliding(true)}
  onMouseUp={(e) => {
  const target = e.target as HTMLInputElement;
  AudioController.seek(Number(target.value));
  setIsSliding(false);
}}
          className="w-full accent-purple-500 h-2 rounded-full bg-white/20"
        />
        <span className="w-10">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default MusicPlayer;