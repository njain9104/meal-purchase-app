import { FC, ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};
type BodyProps = {
  children: ReactNode;
};

type HeaderFC = FC<HeaderProps>;
type BodyFC = FC<BodyProps>;

const Header: HeaderFC = ({ children }) => {
  return <summary>{children}</summary>;
};

const Body: BodyFC = ({ children }) => {
  return <div>{children}</div>;
};

type AccordionProps = {
  children: ReactNode;
};

const Accordion: FC<AccordionProps> & { Header: HeaderFC; Body: BodyFC } = ({
  children,
}) => {
  return <details>{children}</details>;
};

Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;
