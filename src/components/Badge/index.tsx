import React from "react";
import { StyledBadge } from "./styles";
import { BadgeProps } from "./types";

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  return (
    <StyledBadge size={props.size}>
      <a href={props.targetUrl} target="_blank" rel="noreferrer">
        <img alt={props.badgeName ?? "badge"} src={props.badgeImageUrl} />
      </a>
    </StyledBadge>
  );
};

export default Badge;
