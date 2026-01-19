import { Stack } from '@mui/material';

interface VideoControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  isHovered: boolean;
  onPlayPause: () => void;
  onMuteToggle: () => void;
}

export default function VideoControls({ 
  isPlaying, 
  isMuted, 
  isHovered,
  onPlayPause, 
  onMuteToggle 
}: VideoControlsProps) {
  const imageConfig = {
    muted: {
      src: '/assets/images/sound off.svg',
      alt: 'Unmute'
    },
    unmuted: {
      src: '/assets/images/sound on.svg',
      alt: 'Mute'
    },
    playing: {
      src: '/assets/images/pause.svg',
      alt: 'Pause'
    },
    paused: {
      src: '/assets/images/play.svg',
      alt: 'Play'
    },
    style: {
      width:'100%',
      height:'100%'
    }
  };
  const buttonStyles = {
    width: 25.6,
    height: 25.6,
    border: 'none',
    background: 'none',
    padding: 0,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Controls should be visible if:
  // 1. Video is paused (always show controls)
  // 2. Video is playing AND user is hovering
  const shouldShowControls = !isPlaying || isHovered;

  return (
    <Stack
      spacing={1}
      sx={{
        position: 'absolute',
        bottom: 13.2,
        right: 13.2,
        opacity: shouldShowControls ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: shouldShowControls ? 'auto' : 'none',
      }}
    >
      <button
        onClick={onMuteToggle}
        style={buttonStyles}
      >
        <img 
          src={isMuted ? imageConfig.muted.src : imageConfig.unmuted.src} 
          alt={isMuted ? imageConfig.muted.alt : imageConfig.unmuted.alt}
          style={imageConfig.style}
        />
      </button>
      <button
        onClick={onPlayPause}
        style={buttonStyles}
      >
        <img 
          src={isPlaying ? imageConfig.playing.src : imageConfig.paused.src} 
          alt={isPlaying ? imageConfig.playing.alt : imageConfig.paused.alt}
          style={imageConfig.style}
        />
      </button>
    </Stack>
  );
}
