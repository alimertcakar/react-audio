// @ts-nocheck
import React, { ReactElement, useEffect, useState, useContext } from "react";

interface Props {
  url: string;
  id: number;
  context: any;
}

export default function AudioPlayer({ url, id, context }: Props): ReactElement {
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState(null);
  const { currentTrack, setCurrentTrack } = useContext(context);

  useEffect(() => {
    setTrack(new Audio(process.env.PUBLIC_URL + url));
    return () => {};
  }, []);

  const playHandler = () => {
    if (isPlaying) {
      track.pause();
      track.load();
      track.currentTime = 0;
      setIsPlaying(false);
    } else if (currentTrack === id) {
      setCurrentTrack(id);
      playAudio();
      setIsPlaying(true);
    } else {
      setCurrentTrack(id);
    }
    console.log(isPlaying);
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
