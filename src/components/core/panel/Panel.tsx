import clsx from "clsx";
import { FC, ReactNode } from "react";
import classes from "./Panel.module.css";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

const Panel: FC<PanelProps> = ({ children, className }) => {
  return (
    <div className={clsx(classes.panelContainer, className)}>{children}</div>
  );
};

export default Panel;
