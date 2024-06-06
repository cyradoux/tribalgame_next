// Checkbox Component (checkbox.tsx)
import React from "react";

interface CheckboxProps {
  id: string;
  type: string;
  name: string;
  label: string;
  check: boolean;
  onClick: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  type,
  name,
  label,
  check,
  onClick,
}) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        name={name}
        checked={check}
        onChange={onClick}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
