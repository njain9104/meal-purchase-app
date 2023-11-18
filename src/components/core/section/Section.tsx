import { FC, ReactNode } from "react";

export type SectionProps = {
  children: ReactNode;
};

const Section: FC<SectionProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default Section;
