import { useState } from "react";
import DatePiker from "./datepiker";
import Dateslider from "./dateslider";
import HourSelector from "./hourSelector";
import NumberPlayer from "./numbrPlayer";

interface StepOneFormProps {
  onReservationDateChange: (date: Date | null) => void;
  onReservationHourChange: (hour: string) => void;
  onReservationNbrPlayerChange: (nbrPlayer: number) => void;
}

const StepOneForm: React.FC<StepOneFormProps> = ({
  onReservationDateChange,
  onReservationHourChange,
  onReservationNbrPlayerChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [nbrPlayers, setNbrPlayers] = useState({
    "8-12_years": 0,
    "13-17_years": 0,
    adults: 0,
  });

  const handlePlayerClick = (ageGroup: string, nbrPlayer: number) => {
    setNbrPlayers((prevState) => ({
      ...prevState,
      [ageGroup]: nbrPlayer,
    }));
    onReservationNbrPlayerChange(ageGroup, nbrPlayer);
  };

  const handleDateClick = (selectedDay: Date | null) => {
    setSelectedDate(selectedDay);
    onReservationDateChange(selectedDay);
  };

  const handleHourClick = (selectedHour: string) => {
    onReservationHourChange(selectedHour);
  };

  return (
    <div className="form-container form_One">
      <h4>Nombre de Joueur</h4>
      <NumberPlayer
        ageofPlayer={"8-12"}
        onReservationNbrPlayerChange={(nbrPlayer) =>
          handlePlayerClick("8-12", nbrPlayer)
        }
      />
      <NumberPlayer
        ageofPlayer={"13-17"}
        onReservationNbrPlayerChange={(nbrPlayer) =>
          handlePlayerClick("13-17", nbrPlayer)
        }
      />
      <NumberPlayer
        ageofPlayer={"adultes"}
        onReservationNbrPlayerChange={(nbrPlayer) =>
          handlePlayerClick("adults", nbrPlayer)
        }
      />
      <DatePiker
        selectedDate={selectedDate}
        onReservationDateChange={handleDateClick}
      />
      <Dateslider onReservationDateChange={handleDateClick} />
      <HourSelector onReservationHourChange={handleHourClick} />
    </div>
  );
};

export default StepOneForm;
