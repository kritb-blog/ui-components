import styled from "styled-components";
import { Theme } from "../../theming";
import { IconSize } from "../../theming/sizes";

interface StyledBadgeProps {
  size: IconSize;
}

export const StyledBadge = styled.div<StyledBadgeProps>`
  border-radius: 50%;
  background-color: ${Theme.Colors.Active};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  cursor: pointer;
  padding: 5px;

  &:hover {
    background-color: ${Theme.Colors.Primary};
  }
`;
