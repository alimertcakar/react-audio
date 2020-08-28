// @ts-nocheck
import React, { ReactElement, useEffect, useState } from "react";

interface Props {
  url: string;
}

export default function AudioPlayer({ url }: Props): ReactElement {
  let [isPlaying, setIsPlaying] = useState(false);
  let [track, setTrack] = useState(null);

  useEffect(() => {
    setTrack(new Audio(process.env.PUBLIC_URL + url));
    return () => {};
  }, []);

  const playHandler = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      track.pause();
      track.currentTime = 0;
    } else {
      playAudio();
    }
  };

  const playAudio = () => {
    const audioPromise = track.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then((_) => {
          // autoplay started
        })
        .catch((err) => {
          // catch dom exception
          console.info(err);
        });
    }
  };

  return (
    <div>
      <button onClick={playHandler}>play</button>
    </div>
  );
}
