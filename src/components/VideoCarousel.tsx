import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import VideoSlide from './VideoSlide';

interface VideoCarouselProps {
  videoPaths: string[];
}

export default function VideoCarousel({ videoPaths }: VideoCarouselProps) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {videoPaths.map((videoSrc, index) => (
        <SwiperSlide key={index}>
          <VideoSlide videoSrc={videoSrc} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
