import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  background?: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ background, children, ...props }) => (
  <div className="h-screen" style={{ background }} {...props}>
    {children}
  </div>
);

export default Section;
