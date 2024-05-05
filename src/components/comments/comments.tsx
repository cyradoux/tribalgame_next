import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export type CommentsPropsType = {
  CommentsItems: CommentsItem[];
};

export type CommentsItem = {
  question: string;
  response: string;
};
/*
const [comments, setComments] = useState([]);

useEffect(() => {
  // Fonction asynchrone pour récupérer les avis de l'API
  const fetchData = async () => {
    try {
      const accountId = "yourAccountId";
      const locationId = "yourLocationId";
      const data = await fetchReviews(accountId, locationId);
      setComments(data); // Met à jour l'état avec les données récupérées
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  fetchData(); // Appel de la fonction pour récupérer les données
}, []);

*/
const Comments = () => {

 /* const faqItems = CommentsItems.map((item, i) => (
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
    </SwiperSlide>
  )); */

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Comments;
