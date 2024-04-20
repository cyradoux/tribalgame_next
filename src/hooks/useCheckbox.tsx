import React, {useState} from 'react';

const UseCheckbox = ({initialValue}: any) => {
    const [isChecked, setIsChecked] = useState(initialValue);
    const toggle = () => setIsChecked(!isChecked);
    const reset = () => setIsChecked(false);

    return { isChecked, toggle, reset };
};

export default UseCheckbox;