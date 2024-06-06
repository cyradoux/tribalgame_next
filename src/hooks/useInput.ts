import React,{ useState } from "react";

const useInput = (defaultValue: any, validationFn: (_: any) => boolean) => {
    
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);
    const hasError = !valueIsValid && didEdit;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    }

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setDidEdit(true);
    }

    const reset = () => {
        setEnteredValue('');
        setDidEdit(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        handleInputChange,
        handleInputBlur,
        reset
    }
}

export default useInput;