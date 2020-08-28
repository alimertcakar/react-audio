// @ts-nocheck
import React, {
  ReactElement,
  useEffect,
  useState,
  useContext,
  useRef,
} from "react";

export default React.memo(function AudioPlayer({ url, id, context }): ReactElement {
  const [isPlaying, setIsPlaying] = useState(false);
  const player = useRef();
  const { currentTrack, setCurrentTrack } = useContext(context);
  useEffect(()=>{if (currentTrack !== id) {
    player.current.pause()
  }else{player.current.play()}},[])
  
  
  

  const onPlay = () => {
    setCurrentTrack(id);
    setIsPlaying(true);
  };
  const onPause = () => {
    setIsPlaying(false);
  };
  return (
    <audio
      src={url}
      controls
      onPlay={onPlay}
      onPause={onPause}
      ref={player}
    ></audio>
  );
});
