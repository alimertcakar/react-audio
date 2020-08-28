// @ts-nocheck
import React, { ReactElement, useEffect, useState, useContext, useRef } from "react";


export default function AudioPlayer({ url,id,context }): ReactElement {
    const [isPlaying, setIsPlaying] = useState(false);
    let canPlay = false;
    const player = useRef();
    const { currentTrack, setCurrentTrack } = useContext(context);

    const onPlay = () =>{
         player.current.pause();
        setCurrentTrack(id);
        setIsPlaying(true);
    }
    const onPause = () =>{
      //track.currentTime = 0;
      setIsPlaying(false);
    }
  return (
    <audio src={url} controls onPlay={onPlay} onPause={onPause} ref={player}>
     
    </audio>
  );
}
