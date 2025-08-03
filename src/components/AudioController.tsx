let audio = new Audio();
let isPlaying = false;

const AudioController = {
   audio,
  playlist: [],
  currentIndex: 0,
  
  load: (src) => {
    audio.src = src;
    audio.load();
  },
clear: () => {
  audio.pause();
  audio.src = "";
  audio.load();
  AudioController.playlist = [];
  AudioController.currentIndex = 0;
},
play: () => {
  console.log("Attempting to play", audio.src);
  return audio.play()
    .then(() => {
      isPlaying = true;
      console.log("Playback started");
    })
    .catch((err) => {
      console.error("Playback failed", err);
    });
},


  pause: () => {
    audio.pause();
    isPlaying = false;
  },
  prev: () => {
    if (AudioController.currentIndex > 0) {
      AudioController.currentIndex--;
      const prevSong = AudioController.playlist[AudioController.currentIndex];
      AudioController.load(prevSong.source);
      AudioController.play();
    } else {
      console.log('Start of playlist');
    }
  },
    next: () => {
    if (AudioController.currentIndex < AudioController.playlist.length - 1) {
      AudioController.currentIndex++;
      const nextSong = AudioController.playlist[AudioController.currentIndex];
      AudioController.load(nextSong.source);
      AudioController.play();
    } else {
      console.log('End of playlist');
    }
  },
loadPlaylist: async (playlist) => {
  AudioController.playlist = playlist;
  AudioController.currentIndex = 0;

  const currentSong = playlist[0];
  if (!currentSong) return;

  return new Promise((resolve, reject) => {
    audio.pause();
    audio.src = "";
    AudioController.load(currentSong.source);

    audio.onloadedmetadata = () => {
      console.log("Metadata loaded. Duration:", audio.duration);
      resolve(true);
    };

    audio.onerror = (err) => {
      console.error("Audio load failed", err);
      reject(err);
    };
  });
},


  isPlaying: () => isPlaying,

  seek: (seconds) => {
    audio.currentTime = seconds;
  },

  getCurrentTime: () => audio.currentTime,

  getDuration: () => audio.duration,

  onTimeUpdate: (callback) => {
    audio.ontimeupdate = callback;
  },

  onEnded: (callback) => {
    audio.onended = callback;
  },
};

export default AudioController;
