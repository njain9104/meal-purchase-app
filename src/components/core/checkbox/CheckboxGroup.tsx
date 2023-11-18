import clsx from "clsx";
import { FC, useState } from "react";
import Checkbox, { CheckboxProps } from "./Checkbox";
import classes from "./Checkbox.module.css";

type CheckboxGroupValue = Record<string, boolean>;

export type CheckboxGroupProps = {
  options: Array<Omit<CheckboxProps, "onChange">>;
} & {
  onChange?: (value: CheckboxGroupValue) => void;
  className?: string;
  showAllOption?: boolean;
};

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  options,
  onChange: onChangeFromProps,
  className,
  showAllOption = false,
}) => {
  const [checked, setChecked] = useState<CheckboxGroupValue>(() => {
    return options.reduce((acc, cur) => {
      acc[cur.name] === cur.checked || false;
      return acc;
    }, {} as Record<string, boolean>);
  });

  const onChange = (name: string, value: boolean) => {
    let next = {} as CheckboxGroupValue;

    if (name === "all") {
      next["all"] = true;
    } else {
      next = { ...checked, [name]: value, all: false };
    }

    setChecked(next);
    onChangeFromProps?.(next);
  };

  const renderShowAllOption = () => {
    if (!showAllOption) return null;
    return (
      <Checkbox
        name={"all"}
        onChange={onChange}
        label="All"
        checked={checked["all"]}
      />
    );
  };

  return (
    <div className={clsx(classes.checkboxGroupContainer, className)}>
      {renderShowAllOption()}
      {options.map((opt) => (
        <Checkbox
          key={opt.name}
          name={opt.name}
          label={opt.label}
          onChange={onChange}
          checked={checked[opt.name] || false}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
