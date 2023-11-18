import { FC, ReactNode } from "react";
import classes from "./Section.module.css";

export type SectionProps = {
  children: ReactNode;
};

const Section: FC<SectionProps> = ({ children }) => {
  return <section className={classes.sectionCntr}>{children}</section>;
};

export default Section;
