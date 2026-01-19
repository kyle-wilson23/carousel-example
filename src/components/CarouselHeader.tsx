import { IconButton, Stack, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

interface CarouselHeaderProps {
  prevButtonRef: React.RefObject<HTMLButtonElement | null>
  nextButtonRef: React.RefObject<HTMLButtonElement | null>
}

function CarouselHeader({ prevButtonRef, nextButtonRef }: CarouselHeaderProps) {
  const buttonStyles = { width: 48, height: 48, borderRadius: '50%', backgroundColor: 'white' };

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' pt='40px' pb={2}>
      <Typography fontWeight={600} fontSize={28} lineHeight='36px' color='midnightBalanced.main'>
        A day in the life
      </Typography>
      <Stack direction='row'>
        <IconButton ref={prevButtonRef} sx={buttonStyles} aria-label='previous video'>
          <ChevronLeft />
        </IconButton>
        <IconButton ref={nextButtonRef} sx={{ ...buttonStyles, marginLeft: '20px' }} aria-label='next video'>
          <ChevronRight />
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default CarouselHeader
