import React from 'react';
import classes from "@/components/contact-form/contact_form.module.css";

const Input = ({id, label, error, required, ...props}: Record<string, any>) => {
    return (
        <>
            <input
                className={`form-control ${ classes.inputBox_input }`}
                id={id}
                required={required}
                {...props}
            />
            <span className={ classes.inputBox_span }>{label}</span>
            <div className="control-error">{error && <p>{error}</p>}</div>
        </>
    );
};

export default Input;