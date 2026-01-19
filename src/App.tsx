import { useRef } from 'react'
import { Container, Stack } from '@mui/material'
import VideoCarousel from './components/VideoCarousel'
import CarouselHeader from './components/CarouselHeader'

// Generate an array of video paths from the assets folder
const videoPaths = [...Array(15)].map((_, i) => `/assets/videos/${i + 1}.mp4`);

function App() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <Container maxWidth='lg' sx={{ padding: { xs: '0 16px' } }}>
      <Stack spacing={2}>
        <CarouselHeader prevButtonRef={prevRef} nextButtonRef={nextRef} />
        <VideoCarousel 
          videoPaths={videoPaths}
          prevButtonRef={prevRef}
          nextButtonRef={nextRef}
        />
      </Stack>
    </Container>
  )
}

export default App
