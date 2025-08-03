import React from 'react';

interface SongCardProps {
  title: string;
  index: number;
  onClick?: () => void;
}

const SongCard: React.FC<SongCardProps> = ({ title, index, onClick }) => {
  return (
    <div
      className="flex items-center justify-between px-4 py-3 mb-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-purple-500/10 transition cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold shadow">
          {index + 1}
        </div>
        <div className="text-white font-medium truncate max-w-[200px]">{title}</div>
      </div>
    </div>
  );
};

export default SongCard;
