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

  const handleSlideChange = (swiper: SwiperType) => {
    // Use realIndex instead of activeIndex to get the actual slide index in loop mode
    setActiveIndex(swiper.realIndex);
  }

  const onInit = (swiper: SwiperType) => {
    // Ensure navigation is properly initialized with custom controls only
    if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevButtonRef.current;
      swiper.params.navigation.nextEl = nextButtonRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }
  
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      // Overrides default navigation controls but avoids errors related to accessing refs during render
      // onInit is used to initialize the navigation controls with the custom buttons
      navigation={{
        prevEl: null,
        nextEl: null,
      }}
      modules={[Navigation]}
      onInit={onInit}
      onSlideChange={handleSlideChange}
      onSwiper={handleSlideChange}
      breakpoints={{
        // Mobile: 2 slide
        640: { slidesPerView: 2 },
        // Tablet: 2 slides
        768: { slidesPerView: 3 },
        // Desktop: 4 slides
        1024: { slidesPerView: 4 }
      }}
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
