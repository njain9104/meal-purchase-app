import { FC } from "react";
import Checkbox, { CheckboxProps } from "../checkbox/Checkbox";

export type ChipProps = CheckboxProps;

const Chip: FC<ChipProps> = (props) => {
  return <Checkbox {...props} />;
};

export default Chip;
