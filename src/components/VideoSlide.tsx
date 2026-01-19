import { Stack } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import VideoControls from './VideoControls';

interface VideoSlideProps {
  videoSrc: string;
  isActive: boolean;
}

export default function VideoSlide({ videoSrc, isActive }: VideoSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    // Rely on event listeners to avoid calling setState in an effect below
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Force Safari to load video metadata and show thumbnail... Safari has strict rules about preload attribute
    video.load();

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  // Pause video when slide becomes inactive
  useEffect(() => {
    if (!isActive && videoRef.current && !videoRef.current.paused) {
      // Avoid setIsPlaying here to avoid calling setState in an effect
      videoRef.current.pause();
    }
  }, [isActive]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
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
      width='100%'
      maxWidth={316}
      height='auto'
      borderRadius={'20px'}
      sx={{ 
        position: 'relative',
        aspectRatio: '316/514',
        // Visual indicator for active slide
        boxShadow: isActive ? (theme) => `0 0 0 4px ${theme.palette.skyBold.main}` : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        preload="metadata"
        muted
        playsInline
        style={{
          width: 'calc(100% - 16px)',
          height: 'calc(100% - 14px)',
          maxWidth: 300,
          maxHeight: 500,
          objectFit: 'cover',
          // Disabled visual effect for non-active videos
          opacity: isActive ? 1 : 0.5,
          filter: isActive ? 'none' : 'grayscale(50%)',
          transition: 'opacity 0.3s ease, filter 0.3s ease'
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {isActive && (
        <VideoControls
          isPlaying={isPlaying}
          isMuted={isMuted}
          isHovered={isHovered}
          onPlayPause={handlePlayPause}
          onMuteToggle={handleMuteToggle}
        />
      )}
    </Stack>
  );
}
