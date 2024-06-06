import Input from "@/components/UI/input/input";
import useInput from "@/hooks/useInput";
import Textarea from "@/components/UI/textarea/textarea";
import useFetch from "@/hooks/useFetch";
import {
  verifyEmail,
  verifyLength,
  verifyName,
  verifyPhoneNumberFR,
} from "@/utils/verify";
import { useEffect } from "react";
import { toast } from "react-toastify";

const StepTwoForm = () => {
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: hasLastNameError,
    handleInputChange: handleLastNameChange,
    handleInputBlur: handleLastNameBlur,
    reset: lastNameReset,
  } = useInput("", (enteredLastName) => verifyName(enteredLastName));

  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: hasFirstNameError,
    handleInputChange: handleFirstNameChange,
    handleInputBlur: handleFirstNameBlur,
    reset: nameReset,
  } = useInput("", (enteredFirstName) => verifyName(enteredFirstName));

  const {
    value: enteredMail,
    isValid: mailIsValid,
    hasError: hasMailError,
    handleInputChange: handleLastMailChange,
    handleInputBlur: handleLastMailBlur,
    reset: mailReset,
  } = useInput("", (enteredMail) => verifyEmail(enteredMail));

  useEffect(() => {
    if (hasLastNameError) {
      toast.error("Nom invalide");
    }
    if (hasFirstNameError) {
      toast.error("Prénom invalide");
    }
    if (hasMailError) {
      toast.error("Email invalide");
    }
  }, [hasLastNameError, hasFirstNameError, hasMailError]);

  return (
    <>
      <div className="form-container form_Two">
        <div className="row p-3">
          <div className="col-12 col-md-6">
            <Input
              id={"firstname"}
              type={"text"}
              name={"firstname"}
              placeholder="prénom"
              className="reservation_styled"
              required
              onChange={handleFirstNameChange}
              onBlur={handleFirstNameBlur}
              value={enteredFirstName}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              id={"lastname"}
              type={"text"}
              name={"lastname"}
              placeholder="nom"
              required
              className="reservation_styled"
              onChange={handleLastNameChange}
              onBlur={handleLastNameBlur}
              value={enteredLastName}
            />
          </div>

          <div className="col-12 col-md-6">
            <Input
              id={"mail"}
              type={"text"}
              name={"mail"}
              placeholder="votre mail"
              required
              className="reservation_styled"
              onChange={handleLastMailChange}
              onBlur={handleLastMailBlur}
              value={enteredMail}
              minLength="2"
              maxLength="40"
            />
          </div>
          <div className="col-12 col-md-6">
            <input
              type="phone"
              placeholder="votre téléphone"
              name="phone"
              required
              className="reservation_styled"
            />
          </div>
          <div className="col-12">
            <textarea
              rows={4}
              placeholder="Votre message"
              name="message"
              required
              className="reservation_styled"
            ></textarea>
          </div>
          <div className="col-12 col-md-6">
            <button className="reservation_styled">Reserver</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwoForm;
