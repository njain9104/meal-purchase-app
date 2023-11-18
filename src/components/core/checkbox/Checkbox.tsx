import { FC } from "react";

export type CheckboxProps = {
  name: string;
  onChange?: (value: boolean) => void;
  checked?: boolean;
  label?: string;
};

const Checkbox: FC<CheckboxProps> = ({ name, onChange, checked, label }) => {
  return (
    <span>
      <input
        name={name}
        type="checkbox"
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.checked);
          }
        }}
        checked={checked}
      />
      {label ? <label>{label}</label> : null}
    </span>
  );
};

export default Checkbox;
