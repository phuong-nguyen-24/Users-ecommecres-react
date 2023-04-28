import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper";

const bannerOptions = [
  "https://ykuvzbakqaaeunxqgnhl.supabase.co/storage/v1/object/public/ecommerce/banners/b2.webp",
  "https://ykuvzbakqaaeunxqgnhl.supabase.co/storage/v1/object/public/ecommerce/banners/b1.webp",
  "https://ykuvzbakqaaeunxqgnhl.supabase.co/storage/v1/object/public/ecommerce/banners/b3.webp",
];

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="banner-swiper"
      >
        {bannerOptions.map((item) => (
          <SwiperSlide key={item}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
