import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import "swiper/swiper-bundle.min.css";
import styles from "./carousel-test.module.css";

SwiperCore.use([Navigation, Thumbs]);

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        spaceBetween={50}
        navigation
        onSwiper={setThumbsSwiper}
        thumbs={{ swiper: thumbsSwiper }}
      >
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/10/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/20/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/30/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/40/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/50/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/60/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/70/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/80/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/90/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/100/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/110/900/600"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={10}
        onSwiper={setThumbsSwiper}
        slidesPerView={6}
        watchSlidesVisibility
        watchSlidesProgress
      >
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/10/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/20/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/30/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/40/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/50/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/60/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/70/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/80/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/90/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/100/900/600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.image}`}
            src="https://picsum.photos/id/110/900/600"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default React.memo(Carousel);
