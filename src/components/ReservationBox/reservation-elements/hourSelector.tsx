import React, { FC } from "react";

interface HourSelectorProps {
  onReservationHourChange: (hour: string) => void;
}

const HourSelector: FC<HourSelectorProps> = ({ onReservationHourChange }) => {
  const hours = [];
  for (let i = 9; i <= 18; i++) {
    hours.push(i);
  }

  const handleHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedHour = event.target.value;
    onReservationHourChange(selectedHour);
  };

  return (
    <select name="hourSelected" className="reservation_styled" onChange={handleHourChange} defaultValue="">
        <option value="" disabled>
        Choisissez une heure
      </option>
      {hours.map((hour) => (
        <option key={hour} value={`${hour}`}>
          {`${hour}h`}
        </option>
      ))}
    </select>
  );
};

export default HourSelector;
