import { Stack } from '@mui/material';

interface VideoSlideProps {
  videoSrc: string;
}

export default function VideoSlide({ videoSrc }: VideoSlideProps) {
  return (
    <Stack justifyContent='center' alignItems='center' width={300} height={500}>
      <video
        controls
        preload="metadata"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </Stack>
  );
}
