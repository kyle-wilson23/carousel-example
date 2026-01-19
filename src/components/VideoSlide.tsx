import { Stack } from '@mui/material';
import { useRef, useState } from 'react';
import VideoControls from './VideoControls';

interface VideoSlideProps {
  videoSrc: string;
}

export default function VideoSlide({ videoSrc }: VideoSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <Stack 
      justifyContent='center' 
      alignItems='center' 
      width={300} 
      height={500}
      sx={{ position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        preload="metadata"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <VideoControls
        isPlaying={isPlaying}
        isMuted={isMuted}
        isHovered={isHovered}
        onPlayPause={handlePlayPause}
        onMuteToggle={handleMuteToggle}
      />
    </Stack>
  );
}
