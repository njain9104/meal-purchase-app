import clsx from "clsx";
import { FC, ReactNode } from "react";
import classes from "./Section.module.css";

export type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section: FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={clsx(classes.sectionCntr, className)}>
      {children}
    </section>
  );
};

export default Section;
