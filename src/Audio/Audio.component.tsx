// @ts-nocheck
import React, { ReactElement, useEffect, useState, useContext } from "react";

interface Props {
  url: string;
  id: number;
  context: any;
}

export default function AudioPlayer({ url, id, context }: Props): ReactElement {
  const [isPlaying, setIsPlaying] = useState(false);
  const [track] = useState(new Audio(process.env.PUBLIC_URL + url));
  const { currentTrack, setCurrentTrack } = useContext(context);

  useEffect(() => {
    return () => {
      track.pause();
      track.load();
      track.currentTime = 0;
    };
  }, []);

  const playHandler = () => {
    if (isPlaying) {
      track.pause();
      track.load();
      track.currentTime = 0;
      setIsPlaying(false);
    } else {
      setCurrentTrack(id);
      playAudio();
      setIsPlaying(true);
    }
  };

  const playAudio = () => {
    const audioPromise = track.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then((_) => {
          setIsPlaying(true);
        })
        .catch((err) => {
          setIsPlaying(false);
          console.info(err);
        });
    }
  };

  return (
    <div>
      <button onClick={playHandler}>play-{currentTrack}</button>
      isPlaying:{isPlaying.toString()}
    </div>
  );
}
