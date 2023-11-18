import clsx from "clsx";
import { FC } from "react";
import classes from "./Radio.module.css";

export type RadioProps = {
  name: string;
  onChange?: (id: string, value: boolean) => void;
  checked?: boolean;
  label?: string;
  id: string;
};

const Radio: FC<RadioProps> = ({
  id,
  name,
  onChange,
  checked = false,
  label,
}) => {
  return (
    <span
      className={clsx(classes.radioContainer, { [classes.checked]: checked })}
    >
      <input
        id={id}
        name={name}
        type="radio"
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.id, e.target.checked);
          }
        }}
        checked={checked}
        aria-checked={checked}
      />
      {label ? <label htmlFor={id}>{label}</label> : null}
    </span>
  );
};

export default Radio;
