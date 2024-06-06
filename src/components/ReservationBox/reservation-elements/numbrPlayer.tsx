import React, { FC } from "react";
import { useState } from "react";

interface NumberPlayerProps {
  onReservationNbrPlayerChange: (nbrPlayer: number) => void;
  ageofPlayer: string;
}

const NumberPlayer: React.FC<NumberPlayerProps> = ({
  ageofPlayer,
  onReservationNbrPlayerChange,
}) => {
  const [nBselectedPlayer = 1, setNBselectedPlayer] = useState<number>(0);

  const handleClickaddPlayer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newCount = nBselectedPlayer + 1;
    setNBselectedPlayer(newCount);
    onReservationNbrPlayerChange(newCount);
  };

  const handleClickremovePlayer = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (nBselectedPlayer > 1) {
      const newCount = nBselectedPlayer - 1;
      setNBselectedPlayer(newCount);
      onReservationNbrPlayerChange(newCount);
    }
  };

  return (
    <>
      <div className="nb-player">
        <input
          className="nbSelectedPlayer"
          readOnly
          type="text"
          value={ageofPlayer}
        />
        <input
          className="nbSelectedPlayer"
          readOnly
          type="number"
          name={ageofPlayer}
          value={nBselectedPlayer}
        />
        <div>
          <button
            className="reservation_styled"
            onClick={handleClickremovePlayer}
          >
            -
          </button>
          <button className="reservation_styled" onClick={handleClickaddPlayer}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default NumberPlayer;
