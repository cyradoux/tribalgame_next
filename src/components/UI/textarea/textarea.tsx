import React from 'react';
import classes from "@/components/contact-form/contact_form.module.css";

const Textarea = ({id, label, error, required, ...props}: Record<string, any>) => {
    return (
        <>
            <textarea
                id={id}
                required={required}
                className={`form-control ${ classes.inputBox_input }`}
                {...props}
            ></textarea>
            <span className={ classes.inputBox_span }>{label}</span>
        </>
    );
};

export default Textarea;