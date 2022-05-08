import React from "react";
import { StyledIsometricPlane } from "./styles";

export interface Props {
  children?: React.ReactNode;
}

const IsometricPlane: React.FunctionComponent<Props> = ({ children }) => {
  return <StyledIsometricPlane>{children}</StyledIsometricPlane>;
};

export default IsometricPlane;
