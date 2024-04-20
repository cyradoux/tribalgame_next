import React from 'react';
import classes from "@/components/contact-form/contact_form.module.css";

const Checkbox = ({id, label, error, required, ...props}: Record<string, any>) => {
    return (
        <>
            <input
                className="form-check-input"
                id={id}
                required={required}
                {...props}
            />
            <label  className={`form-check-label ${classes.consent_box}`} htmlFor={id}>
                {label}
            </label>
        </>
    );
};

export default Checkbox;