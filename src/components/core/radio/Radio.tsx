import { FC } from "react";

export type RadioProps = {
  name: string;
  onChange?: (value: boolean) => void;
  checked?: boolean;
  label?: string;
};

const Radio: FC<RadioProps> = ({ name, onChange, checked, label }) => {
  return (
    <span>
      <input
        name={name}
        type="radio"
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

export default Radio;
