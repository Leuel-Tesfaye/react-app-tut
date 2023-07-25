import React, { ReactNode } from "react";

interface Props {
  children: ReactNode; // this children keyword allows us to pass data to app.tsx as a child
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
