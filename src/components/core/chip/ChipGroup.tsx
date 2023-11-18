import { FC, useState } from "react";
import Chip, { ChipProps } from "./Chip";
import classes from "./Chip.module.css";

type ChipGroupProps = { options: Array<Omit<ChipProps, "onChange">> } & {
  onChange?: (value: Record<string, boolean>) => void;
};

const ChipGroup: FC<ChipGroupProps> = ({
  options,
  onChange: onChangeFromProps,
}) => {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    return options.reduce((acc, cur) => {
      acc[cur.name] === cur.checked || false;
      return acc;
    }, {} as Record<string, boolean>);
  });

  const onChange = (name: string, value: boolean) => {
    setChecked((prev) => {
      return { ...prev, [name]: value };
    });
    if (onChangeFromProps) {
      onChangeFromProps(checked);
    }
  };
  return (
    <div className={classes.chipGroupContainer}>
      {options.map((opt) => (
        <Chip
          key={opt.name}
          name={opt.name}
          label={opt.label}
          onChange={onChange}
          checked={checked[opt.name]}
        />
      ))}
    </div>
  );
};

export default ChipGroup;
