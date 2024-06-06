import React from "react";
import Image from "next/image";

interface TogglePanelProps {
  image: {
    src: string;
  };
  text: string;
  className: string;
  buttonText: string;
  handleClickClassActive: () => void;
  isButtonActive: boolean;
}

const TogglePanel: React.FC<TogglePanelProps> = ({
  image,
  text,
  className,
  buttonText,
  handleClickClassActive,
  isButtonActive,
}) => {
  return (
    <>
      <div className={`toggle-panel pannel_${className}`}>
        <div className="toggle-pannel-img-container">
          {" "}
          <Image width={300} height={300} alt="image airsoft" src={image.src} />
        </div>
        <div className="toggle-pannel-title-container">
          {" "}
          <h3>{text}</h3>
        </div>
        <div className="toggle-pannel-button-container">
          {" "}
          <button
            className={`reservation_styled ${isButtonActive ? "active" : ""}`}
            onClick={handleClickClassActive}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default TogglePanel;
