import React, {useState} from 'react';
import classes from "./contact_form.module.css";
import Input from "@/components/UI/input/input";
import useInput from "@/hooks/useInput";
import Textarea from "@/components/UI/textarea/textarea";
import useFetch from "@/hooks/useFetch";
import {verifyEmail, verifyLength, verifyName, verifyPhoneNumberFR} from "@/utils/verify";
import Checkbox from "@/components/UI/checkbox/checkbox";
import useCheckbox from "@/hooks/useCheckbox";

enum RequestMethods {
    GET= "GET",
    POST= "POST"
}

const ContactForm = () => {
    const { value: enteredLastName, isValid: lastNameIsValid, hasError: hasLastNameError, handleInputChange: handleLastNameChange, handleInputBlur: handleLastNameBlur, reset: lastNameReset } = useInput('', (enteredLastName) => verifyName(enteredLastName));
    const { value: enteredFirstName, isValid: firstNameIsValid, hasError: hasFirstNameError, handleInputChange: handleFirstNameChange, handleInputBlur: handleFirstNameBlur, reset: nameReset } = useInput('', (enteredFirstName) => verifyName(enteredFirstName));
    const { value: enteredEmail, isValid: emailIsValid, hasError: hasEmailError, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, reset: emailReset } = useInput('', (enteredEmail) => verifyEmail(enteredEmail));
    const { value: enteredTel, isValid: telIsValid, hasError: hasTelError, handleInputChange: handleTelChange, handleInputBlur: handleTelBlur, reset: telReset } = useInput('', (enteredTel) => verifyPhoneNumberFR(enteredTel));
    const { value: enteredSubject, isValid: subjectIsValid, hasError: hasSubjectError, handleInputChange: handleSubjectChange, handleInputBlur: handleSubjectBlur, reset: subjectReset } = useInput('', (enteredSubject) => verifyLength(enteredSubject, 3, 50));
    const { value: enteredMessage, isValid: messageIsValid, hasError: hasMessageError, handleInputChange: handleMessageChange, handleInputBlur: handleMessagetBlur, reset: messageReset } = useInput('', (enteredMessage) => verifyLength(enteredMessage, 5, 300));
    const {isChecked: isConsentChecked, toggle: consentToggle, reset: consentReset} = useCheckbox(false);

    const {isLoading, error, isSuccess, sendRequest} = useFetch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const datas = Object.fromEntries(formData.entries());


        // @ts-ignore
        window.grecaptcha.ready(async () => {
            // @ts-ignore
            const token = await window.grecaptcha.execute('<clé recaptcha>', { action: 'submit' });

            sendRequest({
                url: "/api/contact",
                method: RequestMethods.POST,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: { ...datas, 'g-recaptcha-response': token },
            });

            if(isSuccess) {
                lastNameReset();
                nameReset();
                emailReset();
                telReset();
                subjectReset();
                messageReset();
                consentReset();
            }
        });
    }

    return (
        <>
            <section className={ classes.contact }>
                <div className="container">
                    <div className="row gx-lg-0 gy-4">

                        <div className="col-lg-12">
                            <form onSubmit={handleSubmit} role="form" className={ classes.email_form }>
                                <div className="row">
                                    <div className={`col-md-6 ${ classes.form_group } ${ classes.inputBox }`}>
                                        <Input
                                            id={"lastname"}
                                            label={"Nom"}
                                            required={true}
                                            type={"text"}
                                            name={"lastname"}
                                            onChange={handleLastNameChange}
                                            onBlur={handleLastNameBlur}
                                            value={ enteredLastName }
                                            minlength="2"
                                            maxlength="40"
                                        />
                                        { hasLastNameError
                                            ? <p className={ classes.input_error_message }>Votre nom doit contenir entre 2 et 50 caractères et ne doit pas contenir de caractères spéciaux</p>
                                            : <p className={classes.required }>Champs obligatoire</p>
                                        }
                                    </div>
                                    <div className={`col-md-6 ${ classes.form_group } ${ classes.inputBox }`}>
                                        <Input
                                            id={"firstname"}
                                            label={"Prénom"}
                                            required={true}
                                            type={"text"}
                                            name={"firstname"}
                                            onChange={handleFirstNameChange}
                                            onBlur={handleFirstNameBlur}
                                            value={enteredFirstName}
                                            minlength="2"
                                            maxlength="40"
                                        />
                                        { hasFirstNameError
                                            ? <p className={ classes.input_error_message }>Votre prénom doit contenir entre 2 et 50 caractères et ne doit pas contenir de caractères spéciaux</p>
                                            : <p className={classes.required }>Champs obligatoire</p>  }
                                    </div>
                                </div>

                                <div className="row">
                                    <div className={`col-md-6 ${ classes.form_group } ${ classes.inputBox }`}>
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
                                        {hasEmailError
                                            ? <p className={ classes.input_error_message }>L'email saisi n'est pas conforme</p>
                                            : <p className={classes.required }>Champs obligatoire</p>}
                                    </div>
                                    <div className={`col-md-6 ${ classes.form_group } ${ classes.inputBox }`}>
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
                                        {hasTelError
                                            ? <p className={ classes.input_error_message }>Le numéro de téléphone saisi n'est pas conforme au numéro de téléphone français </p>
                                            : <p className={classes.required }>Champs obligatoire</p>}
                                    </div>
                                </div>

                                <div className={`mt-3 ${ classes.form_group } ${ classes.inputBox }`}>
                                    <Input
                                        id={"subject"}
                                        label={"Sujet"}
                                        required={true}
                                        type={"text"}
                                        name={"subject"}
                                        onChange={handleSubjectChange}
                                        onBlur={handleSubjectBlur}
                                        value={enteredSubject}
                                        minlength="4"
                                        maxlength="50"
                                    />
                                    { hasSubjectError
                                        ? <p className={ classes.input_error_message }>Le sujet que vous avez saisi n'est pas conforme</p>
                                        : <p className={classes.required }>Champs obligatoire</p> }
                                </div>
                                <div className={`mt-3 ${ classes.form_group } ${ classes.inputBox }`}>
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
                                        minlength="4"
                                        maxlength="50"
                                    ></Textarea>
                                    { hasMessageError
                                        ? <p className={ classes.input_error_message }>Veuillez saisir votre message</p>
                                        : <p className={classes.required }>Champs obligatoire</p>}
                                </div>

                                <div className={`mt-3 form-check`} >
                                    <Checkbox
                                        id={"consentement"}
                                        type={"checkbox"}
                                        name={"consent"}
                                        required={true}
                                        label={"Les données à caractères personnels recueillis par le présent formulaire sont destinées\n" +
                                            "à être utilisé pour vous recontacter"}
                                        check
                                        onClick={consentToggle}
                                    ></Checkbox>
                                </div>

                                <div className="my-3">
                                    { error && <div className={ classes.error_message }>Une erreur est survenue. Veuillez essayer ultérieurement ou me contacter par téléphone.</div> }
                                    { isSuccess && <div className={ classes.sent_message }>Votre message a été envoyé! Je vous contacterez bientôt. Merci!</div> }
                                    { !isLoading && !isSuccess && !error &&
                                        <div className="text-center" >
                                            <button type="submit">Envoyer</button>
                                        </div>
                                    }
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;