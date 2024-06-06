import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Scrollbar } from "swiper/modules";

interface DatesliderProps {
  onReservationDateChange: (date: Date) => void;
}

const Dateslider: React.FC<DatesliderProps> = ({ onReservationDateChange }) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  const handleDateClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
    date: Date
  ) => {
    event.preventDefault();
    onReservationDateChange(date);
    setSelectedDay(date);
  };

  const daysInMonth = (month: number, year: number) =>
    new Date(year, month, 0).getDate();

  const renderDayButtons = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDay = date.getDate();
    const daysOfMonth = [];
    let key = 0;

    for (let monthOffset = 0; monthOffset <= 4; monthOffset++) {
      const iterMonth = currentMonth + monthOffset;
      const year = currentYear + Math.floor(iterMonth / 12);
      const month = iterMonth % 12;
      const daysInThisMonth = daysInMonth(month, year);

      const startDay = monthOffset === 0 ? currentDay : 1;
      for (let day = startDay; day <= daysInThisMonth; day++) {
        const formattedDate = new Date(year, month, day);
        key++;
        const isActive =
          selectedDay.getTime() === formattedDate.getTime() ? "active" : "";
        daysOfMonth.push(
          <SwiperSlide key={key} className={isActive}>
            <div>
              <button
                className={`btn p-3 ${isActive}`}
                data-name={`date-${formattedDate.toISOString().split("T")[0]}`}
                onClick={(event) => handleDateClick(event, formattedDate)}
              >
                <div className="text-capitalize">
                  {formattedDate.toLocaleDateString("fr-FR", {
                    weekday: "short",
                  })}
                </div>
                <div className="h1 mb-2">{day}</div>
                <div className="h2 mb-0">
                  {formattedDate.toLocaleDateString("fr-FR", {
                    month: "short",
                  })}
                </div>
                <div>{currentYear}</div>
              </button>
            </div>
          </SwiperSlide>
        );
      }
    }

    return daysOfMonth;
  };

  return (
    <div className="d-flex flex-wrap">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={5}
        scrollbar={true}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar]}
        className="date_reservation swiper-container"
      >
        {renderDayButtons()}
      </Swiper>
    </div>
  );
};

export default Dateslider;
