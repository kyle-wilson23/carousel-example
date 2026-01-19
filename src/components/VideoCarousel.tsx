import { type RefObject, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import VideoSlide from './VideoSlide';

import 'swiper/swiper-bundle.css';

interface VideoCarouselProps {
  videoPaths: string[];
  prevButtonRef: RefObject<HTMLButtonElement | null>;
  nextButtonRef: RefObject<HTMLButtonElement | null>;
}

export default function VideoCarousel({ videoPaths, prevButtonRef, nextButtonRef }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Map prev/next button refs to swiper navigation
  const onBeforeInit = (swiper: SwiperType) => {
    if (typeof swiper.params.navigation !== 'boolean') {
      const navigation = swiper.params.navigation;
      if (navigation && prevButtonRef && nextButtonRef) {
        navigation.prevEl = prevButtonRef.current;
        navigation.nextEl = nextButtonRef.current;
      }
    }
  }

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  }
  
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      navigation={true}
      onBeforeInit={ onBeforeInit }
      modules={[Navigation]}
      onSlideChange={handleSlideChange}
      onSwiper={handleSlideChange}
      style={{
        padding: '8px',
        overflow: 'visible'
      }}
    >
      {videoPaths.map((videoSrc, index) => (
        <SwiperSlide key={index} style={{ overflow: 'visible' }}>
          <VideoSlide videoSrc={videoSrc} isActive={index === activeIndex} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
