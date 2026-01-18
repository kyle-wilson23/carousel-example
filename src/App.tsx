import { Container, Stack, Typography } from '@mui/material'
import VideoCarousel from './components/VideoCarousel'

// Generate an array of video paths from the assets folder
const videoPaths = [...Array(15)].map((_, i) => `/assets/videos/${i + 1}.mp4`);

function App() {
  return (
    <Container maxWidth="lg" sx={{ padding: 0 }}>
      <Stack spacing={2}>
        <Typography variant="h4" color="midnightBalanced.main">A day in the life</Typography>
        <VideoCarousel videoPaths={videoPaths} />
      </Stack>
    </Container>
  )
}

export default App
