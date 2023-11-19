import clsx from "clsx";
import { FC, ReactNode } from "react";
import classes from "./Accordion.module.css";

type HeaderProps = {
  children: ReactNode;
};
type BodyProps = {
  children: ReactNode;
};

type HeaderFC = FC<HeaderProps>;
type BodyFC = FC<BodyProps>;

const Header: HeaderFC = ({ children }) => {
  return (
    <summary className={classes.accordionHeaderContainer}>{children}</summary>
  );
};

const Body: BodyFC = ({ children }) => {
  return <div>{children}</div>;
};

type AccordionProps = {
  children: ReactNode;
  className?: string;
};

const Accordion: FC<AccordionProps> & { Header: HeaderFC; Body: BodyFC } = ({
  children,
  className,
}) => {
  return (
    <details className={clsx(classes.accordionDetailsContainer, className)}>
      {children}
    </details>
  );
};

Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;
