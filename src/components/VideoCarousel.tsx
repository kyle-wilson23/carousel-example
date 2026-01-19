import { type RefObject } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import VideoSlide from './VideoSlide';

interface VideoCarouselProps {
  videoPaths: string[];
  prevButtonRef: RefObject<HTMLButtonElement | null>;
  nextButtonRef: RefObject<HTMLButtonElement | null>;
}

export default function VideoCarousel({ videoPaths, prevButtonRef, nextButtonRef }: VideoCarouselProps) {
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
  
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      navigation={true}
      onBeforeInit={ onBeforeInit }
      modules={[Navigation]}
      // TODO: get rid of logs
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
