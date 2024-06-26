import React, { useState } from "react";
import classes from "./contact_form.module.css";
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
import Checkbox from "@/components/UI/checkbox/checkbox";
import useCheckbox from "@/hooks/useCheckbox";

enum RequestMethods {
  GET = "GET",
  POST = "POST",
}

const ContactForm = () => {
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
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: hasEmailError,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    reset: emailReset,
  } = useInput("", (enteredEmail) => verifyEmail(enteredEmail));
  const {
    value: enteredTel,
    isValid: telIsValid,
    hasError: hasTelError,
    handleInputChange: handleTelChange,
    handleInputBlur: handleTelBlur,
    reset: telReset,
  } = useInput("", (enteredTel) => verifyPhoneNumberFR(enteredTel));
  const {
    value: enteredSubject,
    isValid: subjectIsValid,
    hasError: hasSubjectError,
    handleInputChange: handleSubjectChange,
    handleInputBlur: handleSubjectBlur,
    reset: subjectReset,
  } = useInput("", (enteredSubject) => verifyLength(enteredSubject, 3, 50));

  const {
    isChecked: isAirsoftChecked,
    toggle: airsoftToggle,
    reset: airsoftReset,
  } = useCheckbox(false);
  const {
    isChecked: isPaintballChecked,
    toggle: paintballToggle,
    reset: paintballReset,
  } = useCheckbox(false);

  const {
    isChecked: isArcheryChecked,
    toggle: archeryToggle,
    reset: archeryReset,
  } = useCheckbox(false);

  const {
    isChecked: isLaserChecked,
    toggle: laserToggle,
    reset: laserReset,
  } = useCheckbox(false);

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: hasMessageError,
    handleInputChange: handleMessageChange,
    handleInputBlur: handleMessagetBlur,
    reset: messageReset,
  } = useInput("", (enteredMessage) => verifyLength(enteredMessage, 5, 300));

  const {
    isChecked: isConsentChecked,
    toggle: consentToggle,
    reset: consentReset,
  } = useCheckbox(false);

  const { isLoading, error, isSuccess, sendRequest } = useFetch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const datas = Object.fromEntries(formData.entries());

    console.log(datas, "icilesdatasarecuperer");
  };

  return (
    <>
      <section className={classes.contact}>
        <div className="container text-center">
          <h2>Par téléphone au 06 07 24 46 35 de 9h à 18h 7/7.</h2>
          {/* <div className="row gx-lg-0 gy-4">
            <div className="col-lg-12">
            <form
                onSubmit={handleSubmit}
                role="form"
                className={classes.email_form}
              >
                <div className="row">
                  <div
                    className={`col-md-6 ${classes.form_group} ${classes.inputBox}`}
                  >
                    <Input
                      id={"lastname"}
                      label={"Nom"}
                      required={true}
                      type={"text"}
                      name={"lastname"}
                      onChange={handleLastNameChange}
                      onBlur={handleLastNameBlur}
                      value={enteredLastName}
                      minLength="2"
                      maxLength="40"
                    />
                    {hasLastNameError ? (
                      <p className={classes.input_error_message}>
                        Votre nom doit contenir entre 2 et 50 caractères et ne
                        doit pas contenir de caractères spéciaux
                      </p>
                    ) : (
                      <p className={classes.required}>Champs obligatoire</p>
                    )}
                  </div>
                  <div
                    className={`col-md-6 ${classes.form_group} ${classes.inputBox}`}
                  >
                    <Input
                      id={"firstname"}
                      label={"Prénom"}
                      required={true}
                      type={"text"}
                      name={"firstname"}
                      onChange={handleFirstNameChange}
                      onBlur={handleFirstNameBlur}
                      value={enteredFirstName}
                      minLength="2"
                      maxLength="40"
                    />
                    {hasFirstNameError ? (
                      <p className={classes.input_error_message}>
                        Votre prénom doit contenir entre 2 et 50 caractères et
                        ne doit pas contenir de caractères spéciaux
                      </p>
                    ) : (
                      <p className={classes.required}>Champs obligatoire</p>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div
                    className={`col-md-6 ${classes.form_group} ${classes.inputBox}`}
                  >
                    <Input
                      id={"email"}
                      label={"Email"}
                      required={true}
                      type={"email"}
                      name={"email"}
                      onChange={handleEmailChange}
                      onBlur={handleEmailBlur}
                      value={enteredEmail}
                    />
                    {hasEmailError ? (
                      <p className={classes.input_error_message}>
                        L&apos;email saisi n&apos;est pas conforme
                      </p>
                    ) : (
                      <p className={classes.required}>Champs obligatoire</p>
                    )}
                  </div>
                  <div
                    className={`col-md-6 ${classes.form_group} ${classes.inputBox}`}
                  >
                    <Input
                      id={"tel"}
                      label={"Téléphone"}
                      required={true}
                      type={"tel"}
                      name={"tel"}
                      onChange={handleTelChange}
                      onBlur={handleTelBlur}
                      value={enteredTel}
                    />
                    {hasTelError ? (
                      <p className={classes.input_error_message}>
                        Le numéro de téléphone saisi n&apos;est pas conforme au
                        numéro de téléphone français{" "}
                      </p>
                    ) : (
                      <p className={classes.required}>Champs obligatoire</p>
                    )}
                  </div>
                </div>

                <div
                  className={`mt-3 ${classes.form_group} ${classes.inputBox}`}
                >
                  <Input
                    id={"subject"}
                    label={"Sujet"}
                    required={true}
                    type={"text"}
                    name={"subject"}
                    onChange={handleSubjectChange}
                    onBlur={handleSubjectBlur}
                    value={enteredSubject}
                    minLength="4"
                    maxLength="50"
                  />
                  {hasSubjectError ? (
                    <p className={classes.input_error_message}>
                      Le sujet que vous avez saisi n&apos;est pas conforme
                    </p>
                  ) : (
                    <p className={classes.required}>Champs obligatoire</p>
                  )}
                </div>
                <div className="row">
                  <div
                    className={`col-6 col-md-3 ${classes.form_group} ${classes.inputBox} `}
                  >
                    <Checkbox
                      id={"airsoft"}
                      type={"checkbox"}
                      name={"airsoft"}
                      label={"Airsoft"}
                      check={isAirsoftChecked}
                      onClick={airsoftToggle}
                    />
                  </div>
                  <div
                    className={`col-6 col-md-3 ${classes.form_group} ${classes.inputBox} `}
                  >
                    <Checkbox
                      id={"paintball"}
                      type={"checkbox"}
                      name={"paintball"}
                      label={"Paintball"}
                      check={isPaintballChecked}
                      onClick={paintballToggle}
                    />
                  </div>
                  <div
                    className={`col-6 col-md-3 ${classes.form_group} ${classes.inputBox} `}
                  >
                    <Checkbox
                      id={"archery"}
                      type={"checkbox"}
                      name={"archery"}
                      label={"Archery Tag"}
                      check={isArcheryChecked}
                      onClick={archeryToggle}
                    />
                  </div>
                  <div
                    className={`col-6 col-md-3 ${classes.form_group} ${classes.inputBox} `}
                  >
                    <Checkbox
                      id={"laser"}
                      type={"checkbox"}
                      name={"laser"}
                      label={"Laser Game"}
                      check={isLaserChecked}
                      onClick={laserToggle}
                    />
                  </div>
                </div>

                <div
                  className={`mt-3 ${classes.form_group} ${classes.inputBox}`}
                >
                  <Textarea
                    id={"message"}
                    label={"Message"}
                    required={true}
                    type={"text"}
                    name={"message"}
                    onChange={handleMessageChange}
                    onBlur={handleMessagetBlur}
                    value={enteredMessage}
                    rows={7}
                    minLength="4"
                    maxLength="50"
                  ></Textarea>
                  {hasMessageError ? (
                    <p className={classes.input_error_message}>
                      Veuillez saisir votre message
                    </p>
                  ) : (
                    <p className={classes.required}>Champs obligatoire</p>
                  )}
                </div>

                <div className={`mt-3 form-check`}>
                  <Checkbox
                    id={"consentement"}
                    type={"checkbox"}
                    name={"consent"}
                    label={
                      "Les données à caractères personnels recueillis par le présent formulaire sont destinées\n" +
                      "à être utilisé pour vous recontacter"
                    }
                    check
                    onClick={consentToggle}
                  ></Checkbox>
                </div>

                <div className="my-3">
                  {error && (
                    <div className={classes.error_message}>
                      Une erreur est survenue. Veuillez essayer ultérieurement
                      ou me contacter par téléphone.
                    </div>
                  )}
                  {isSuccess && (
                    <div className={classes.sent_message}>
                      Votre message a été envoyé! Merci!
                    </div>
                  )}
                  {!isLoading && !isSuccess && !error && (
                    <div className="text-center">
                      <button type="submit">Envoyer</button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ContactForm;
