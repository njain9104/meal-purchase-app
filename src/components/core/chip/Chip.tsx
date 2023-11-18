import { FC } from "react";
import Checkbox, { CheckboxProps } from "../checkbox/Checkbox";
import classes from "./Chip.module.css";

export type ChipProps = CheckboxProps;

const Chip: FC<ChipProps> = (props) => {
  return <Checkbox {...props} className={classes.chipContainer} />;
};

export default Chip;
