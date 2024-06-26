import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import Radio, { RadioProps } from "./Radio";
import classes from "./Radio.module.css";

type RadioGroupProps = {
  options: Array<Omit<RadioProps, "onChange" | "id">>;
} & {
  name: string;
  onChange?: (name: string, value: boolean) => void;
  className?: string;
};

const initializeOptions = (
  options: Array<Omit<RadioProps, "onChange" | "id">>
) => {
  return options.reduce((acc, cur) => {
    acc[cur.name] = cur.checked === true;
    return acc;
  }, {} as Record<string, boolean>);
};

const RadioGroup: FC<RadioGroupProps> = ({
  options,
  name,
  onChange: onChangeFromProps,
  className,
}) => {
  const [checked, setChecked] = useState<Record<string, boolean>>(
    initializeOptions(options)
  );

  const onChange = (name: string, value: boolean) => {
    setChecked({ [name]: value });
    if (onChangeFromProps) {
      onChangeFromProps(name, value);
    }
  };

  useEffect(() => {
    setChecked(initializeOptions(options));
  }, [options]);

  return (
    <div className={clsx(classes.radioGroupContainer, className)}>
      {options.map((opt) => (
        <Radio
          key={opt.name}
          id={opt.name}
          name={name}
          label={opt.label}
          onChange={onChange}
          checked={checked[opt.name]}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
