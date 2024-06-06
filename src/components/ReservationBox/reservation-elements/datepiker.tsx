import { useState } from "react";
import DatePicker from "react-datepicker";

interface DatePikerProps {
  selectedDate: Date | null;
  onReservationDateChange: (date: Date | null) => void;
}

const DatePiker: React.FC<DatePikerProps> = ({
  selectedDate,
  onReservationDateChange,
}) => {
  const handleDateClick = (selectedDay: Date) => {
    onReservationDateChange(selectedDay);
  };

  return (
    <>
      <div className="reservation-container">
        <div className="row">
        <div className="col-12 col-md-6">
            <h2>Calendrier</h2>
          </div>
          <div className="col-12 col-md-6">
            <DatePicker
              name="dateSelected"
              onChange={handleDateClick}
              selected={selectedDate}
              dateFormat="dd/MM/yyyy"
              withPortal
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatePiker;
