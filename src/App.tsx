import { useRef } from 'react'
import { Container, IconButton, Stack, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import VideoCarousel from './components/VideoCarousel'

// Generate an array of video paths from the assets folder
const videoPaths = [...Array(15)].map((_, i) => `/assets/videos/${i + 1}.mp4`);

function App() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const buttonStyles = { width: 48, height: 48, borderRadius: '50%', backgroundColor: 'white' };

  return (
    <Container maxWidth='lg' sx={{ padding: 0 }}>
      <Stack spacing={2}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' pt='40px' pb={2}>
          <Typography fontWeight={600} fontSize={28} lineHeight='36px' color='midnightBalanced.main'>A day in the life</Typography>
          <Stack direction='row'>
            <IconButton ref={prevRef} sx={buttonStyles} aria-label='previous video'>
              <ChevronLeft />
            </IconButton>
            <IconButton ref={nextRef} sx={{ ...buttonStyles, marginLeft: '20px' }} aria-label='next video'>
              <ChevronRight />
            </IconButton>
          </Stack>
        </Stack>
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
