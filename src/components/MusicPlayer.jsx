import React, { useState, useEffect } from "react";
import playIcon from "../assets/play-icon.png";
import pauseIcon from "../assets/pause-icon.png";
import "../css/MusicPlayer.css";

const MusicPlayer = () => {
  const [audio] = useState(new Audio("../audiofile.mp3"));
  const [isPlaying, setIsPlaying] = useState(false); 

  useEffect(() => {
    audio.play();
    setIsPlaying(true); 
  }, [audio]); 

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="player-controls">
        <button onClick={togglePlay}>
          <img
            src={isPlaying ? pauseIcon : playIcon}
            alt={isPlaying ? "Pause" : "Play"}
            className="play-pause-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
