import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import Checkbox, { CheckboxProps } from "./Checkbox";
import classes from "./Checkbox.module.css";

type CheckboxGroupValue = Record<string, boolean>;

export type CheckboxGroupProps = {
  options: Array<Omit<CheckboxProps, "onChange">>;
} & {
  onChange?: (selectedValues: string[], unselectedValues: string[]) => void;
  className?: string;
  showAllOption?: boolean;
};

const initializeOptions = (
  options: Array<Omit<CheckboxProps, "onChange">>,
  showAllOption: boolean
) => {
  const value: CheckboxGroupValue = { all: true };
  options.forEach((cur) => {
    if (cur.checked) {
      value["all"] = false;
    }
    value[cur.name] = cur.checked || false;
  });
  if (!showAllOption) delete value["all"];
  return value;
};

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  options,
  onChange: onChangeFromProps,
  className,
  showAllOption = false,
}) => {
  const [checked, setChecked] = useState<CheckboxGroupValue>(
    initializeOptions(options, showAllOption)
  );

  useEffect(() => {
    initializeOptions(options, showAllOption);
  }, [options, showAllOption]);

  const onChange = (name: string, value: boolean) => {
    let next = {} as CheckboxGroupValue;

    if (name === "all") {
      next["all"] = true;
    } else {
      next = { ...checked, [name]: value };
      if (showAllOption) {
        next["all"] = false;
        const isAnyChecked = Object.values(next).some(
          (value) => value === true
        );
        if (!isAnyChecked) {
          next = { all: true };
        }
      }
    }

    const checkedValues: string[] = [];
    const uncheckedValues: string[] = [];
    Object.entries(next).forEach(([name, value]) => {
      if (value === true) {
        checkedValues.push(name);
      } else uncheckedValues.push(name);
    });

    setChecked(next);
    onChangeFromProps?.(checkedValues, uncheckedValues);
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
          {...opt}
          onChange={onChange}
          checked={checked[opt.name] || false}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
