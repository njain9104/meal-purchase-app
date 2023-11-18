import clsx from "clsx";
import { FC, useState } from "react";
import Radio, { RadioProps } from "./Radio";
import classes from "./Radio.module.css";

type RadioGroupProps = {
  options: Array<Omit<RadioProps, "onChange" | "id">>;
} & {
  name: string;
  onChange?: (name: string, value: boolean) => void;
  className?: string;
};

const RadioGroup: FC<RadioGroupProps> = ({
  options,
  name,
  onChange: onChangeFromProps,
  className,
}) => {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    return options.reduce((acc, cur) => {
      acc[cur.name] = cur.checked || false;
      return acc;
    }, {} as Record<string, boolean>);
  });

  const onChange = (name: string, value: boolean) => {
    setChecked({ [name]: value });
    if (onChangeFromProps) {
      onChangeFromProps(name, value);
    }
  };

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
