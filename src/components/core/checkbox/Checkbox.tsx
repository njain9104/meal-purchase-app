import clsx from "clsx";
import { FC } from "react";
import classes from "./Checkbox.module.css";

export type CheckboxProps = {
  name: string;
  onChange?: (name: string, value: boolean) => void;
  checked?: boolean;
  label?: string;
  className?: string;
  checkedLabel?: string;
};

const Checkbox: FC<CheckboxProps> = ({
  name,
  onChange,
  checked = false,
  label: labelFromProps,
  checkedLabel,
  className,
}) => {
  const label = checked && !!checkedLabel ? checkedLabel : labelFromProps;

  return (
    <span
      className={clsx(classes.checkboxContainer, className, {
        [classes.checked]: checked,
      })}
    >
      <input
        id={name}
        name={name}
        type="checkbox"
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.name, e.target.checked);
          }
        }}
        aria-checked={checked}
        checked={checked}
      />
      {label ? <label htmlFor={name}>{label}</label> : null}
    </span>
  );
};

export default Checkbox;
