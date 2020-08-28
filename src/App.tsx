//@ts-nocheck
import React, { useEffect, createContext, useState } from "react";
import Audio from "./Audio/AudioPlayer.component";

function App() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const value = { currentTrack, setCurrentTrack };
  const AudioContext = React.createContext(value);
  const tracks = ["audio/track2.mp3", "audio/track3.mp3", "audio/track1.mp3"];

  return (
    <div>
      currentTrack{currentTrack}
      <AudioContext.Provider value={value}>
        {tracks.map((track, index) => {
          return (
            <Audio
              url={track}
              key={index}
              id={index}
              context={AudioContext}
            ></Audio>
          );
        })}
      </AudioContext.Provider>
    </div>
  );
}

export default App;
