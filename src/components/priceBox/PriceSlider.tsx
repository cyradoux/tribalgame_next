import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import EffectCarousel from "./effect-carousel.esm.js";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/virtual";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link.js";

export type PriceItem = {
    name: string;
    description: string | string[];
    price: {
      type: "fixed" | "onDemand";
      amount?: number;
      additionalPerHalfHour?: number;
    };
    cta: {
      texte: string;
      link: string;
    };
  };

export type PriceSliderProps = {
  prices?: PriceItem[];
  tarifsName?: string | "Tarifs";
};

const PriceSlider: React.FC<PriceSliderProps> = ({
  prices = [],
  tarifsName,
}) => {
  let duplicatedPrices = prices;
  if (prices.length <= 3) {
    console.log("duplicating prices");
    duplicatedPrices = [...prices, ...prices];
  }
  const reviewsItems = duplicatedPrices.map((price, i) => (
    <SwiperSlide key={i}>
      <div className="price-slider">
        <div className="price-slider-content">
          <div className="price-slider-name">
            <h4>{price.name}</h4>
          </div>

          {Array.isArray(price.description) ? (
            <ul>
              {price.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <ul>
              <li>{price.description}</li>
            </ul>
          )}

          <div className="price-slider-price">
            {price.price.type === "fixed"
              ? `${price.price.amount} €`
              : "Sur devis"}
          </div>

          <Link href={price.cta.link} className="cta-button">
            {price.cta.texte}
          </Link>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <section id="comment" className="comment">
        <div className="row content gy-4">
          <h3>{tarifsName}</h3>
          <Swiper
            effect={"carousel"}
            grabCursor={true}
            slidesPerView={"auto"}
            pagination={true}
            autoplay={{
              delay: 3500,
            }}
            loop={true}
            modules={[Autoplay, Navigation, Pagination, EffectCarousel]}
            className="mySwiper"
          >
            {reviewsItems}
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default PriceSlider;
