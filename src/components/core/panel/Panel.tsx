import { FC, ReactNode } from "react";
import classes from "./Panel.module.css";

type PanelProps = {
  children: ReactNode;
};

const Panel: FC<PanelProps> = ({ children }) => {
  return <div className={classes.panelContainer}>{children}</div>;
};

export default Panel;
