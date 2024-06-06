import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import arrow from "../../assets/img/comment/fivestars.svg";
import Image from "next/image";

export type CommentsPropsType = {
  reviews?: CommentsItem[]; // Mettre le tableau comme optionnel avec ?
};

export type CommentsItem = {
  auteur: string;
  date: string;
  commentaire: string;
};
const Comments = ({ reviews = [] }: CommentsPropsType) => {
  const reviewsItems = reviews.map((item, i) => (
    <SwiperSlide className="comments-item" key={i}>
      <div key={i}>
        {/* Étoiles */}
        {/* Contenu du commentaire */}
        <div className="comment-content">
          <h3 className="author-name">{item.auteur}</h3>
          <div className="rating-stars">
            {/* Insérez ici votre composant ou code pour afficher les étoiles */}
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              src={arrow.src}
              alt="etoiles"
            />
          </div>
          <p className="comment-date">{item.date}</p>
          <p className="comment-text">{item.commentaire}</p>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <section id="comment" className="comment">
        <div className="row content gy-4">
          <h3>4,8 sur 51 avis Google</h3>
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
            autoplay={{
              delay: 150000,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="comments-slider swiper-container"
          >
            {reviewsItems}
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Comments;
