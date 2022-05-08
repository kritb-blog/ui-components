import React from "react";
import { IGridProps } from "./types";
import IsometricPlane from "../IsometricPlane";
import Grid from "../Grid";

const IsometricGrid: React.FunctionComponent<IGridProps> = ({
  opts,
  className,
  onTileHover,
  onTileClick,
  renderTile,
}) => {
  return (
    <IsometricPlane>
      <div className={className}>
        <Grid
          renderTile={renderTile}
          opts={opts}
          onTileClick={onTileClick}
          onTileHover={onTileHover}
        />
      </div>
    </IsometricPlane>
  );
};

export default IsometricGrid;
