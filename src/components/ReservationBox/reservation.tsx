import React, { FC, FormEvent, useEffect, useState } from "react";
import AnimatedBorder from "@/components/UI/animated-border/animated-border";
import "react-datepicker/dist/react-datepicker.css";
import { useToggle } from "@/hooks/useToogle";
import TogglePanel from "@/components/ReservationBox/reservation-elements/toggle-panel";
import StepTwoForm from "@/components/ReservationBox/reservation-elements/StepTwoForm";
import StepOneForm from "@/components/ReservationBox/reservation-elements/StepOneForm";
import { validateDay, validateHour } from "@/utils/validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useGlobalStore } from "@/store/GlobalStoreContext";

export const metadataLaser = {
  title: "Tribal | LaserTag en extérieur",
  description:
    "Découvrez une expérience unique de Laser Tag en extérieur près de Tournai, à seulement 15 minutes de Lille. Tribal Games propose des parties endiablées de laser game avec des lasers ultramodernes dans un cadre naturel",
};

const style = {
  backgroundColor: "#fff",
  backgroundRepeat: "no-repeat, no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  padding: 0,
  minHeight: "100vh",
};

const sectionTitle = {
  titleBorderColor: "linear-gradient(to bottom, #FF00F5 0%, #7000FF 100%)",
  titleBgColor: "rgba(0,0,0,0)",
};

interface ReservationBoxProps {
  image: string;
  colorCode: string;
}

const ReservationBox: FC<ReservationBoxProps> = ({ image, colorCode }) => {
  const [active, setActive] = useState<boolean>(false);
  const [buttonIsActive, setButtonIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [nextStep, setNextStep] = useState<boolean>(false);
  const [nbrPlayer, setNbrPlayer] = useState<number>(1);
  const [day, setDay] = useState<Date | null>(null);
  const [hour, setHour] = useState<string>("");

  const store = useGlobalStore();

  const handleClickToggleStep = () => {
    if (!validateDay(day)) {
      toast.error("Veuillez sélectionner une date valide.");
    } else if (!validateHour(hour)) {
      toast.error("Veuillez sélectionner une heure valide.");
    } else {
      setActive(!active);
    }
  };

  useEffect(() => {
    if (day !== null && hour !== "") {
      setButtonIsActive(true);
    }
  }, [day, hour]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);
    const datas = Object.fromEntries(formData.entries());

    console.log(datas, "datas");

    try {
      const result = await store.reservationService.postReservation(datas);

      console.log(result, "result");  
      if (result.success) {
        toast.success(
          "La facture à bien été crée et enregistrer dans les brouillons."
        );
      } else {
        toast.error("Des erreurs sont présentes dans le formulaire.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    } finally {
    }
  }

  const handleDateClick = (selectedDay: Date | null) => {
    setDay(selectedDay);
  };

  return (
    <>
      <AnimatedBorder>
        <div
          className={`animated_border_container reservation_box ${
            active ? "active" : ""
          }`}
        >
          <div style={{ background: colorCode }} className="toggle-container">
            <div className="toggle">
              <TogglePanel
                image={image}
                text={"Etape 1 sur 2"}
                className={"one"}
                isButtonActive={buttonIsActive}
                buttonText={"Suivant"}
                handleClickClassActive={handleClickToggleStep}
              />
              <TogglePanel
                image={image}
                text={"Etape 2 sur 2"}
                className={"two"}
                isButtonActive={true}
                buttonText={"Précédent"}
                handleClickClassActive={handleClickToggleStep}
              />
            </div>
          </div>
          <div className="reservation_form">
            <form onSubmit={onSubmit} role="form">
              <StepOneForm
                onReservationDateChange={setDay}
                onReservationHourChange={setHour}
                onReservationNbrPlayerChange={setNbrPlayer}
              />
              <StepTwoForm />
            </form>
          </div>
        </div>
      </AnimatedBorder>
      <ToastContainer />
    </>
  );
};

export default ReservationBox;
