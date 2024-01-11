// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";
export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide><div className="slideitem1"><div className="slideitem_content"><p>Floral</p><h2>Excellent bouquets for you</h2></div></div></SwiperSlide>
      <SwiperSlide><div className="slideitem2"><div className="slideitem_content"><p>Floral</p><h2>Excellent bouquets for you</h2></div></div></SwiperSlide>
      <SwiperSlide><div className="slideitem3"><div className="slideitem_content"><p>Floral</p><h2>Excellent bouquets for you</h2></div></div></SwiperSlide>
      ...
    </Swiper>
  );
};
