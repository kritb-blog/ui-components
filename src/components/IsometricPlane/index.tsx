import React from "react";
import { StyledIsometricPlane } from "./styles";

const IsometricPlane: React.FC = (props) => {
  return <StyledIsometricPlane>{props.children}</StyledIsometricPlane>;
};

export default IsometricPlane;
