import React from "react";
import Tile from "../Tile";
import { IGridProps, IRowProps } from "./types";
import "./styles.css";

const Row: React.FunctionComponent<IRowProps> = ({
  blockSize,
  numOfCol,
  children,
}) => {
  const width = blockSize * numOfCol;
  return (
    <div
      className="row"
      style={{ width: `${width}px`, height: `${blockSize}px` }}
    >
      {children}
    </div>
  );
};

const Grid: React.FunctionComponent<IGridProps> = ({
  opts,
  className,
  onTileHover,
  onTileClick,
  renderTile,
}) => {
  const { numOfRow, numOfCol, blockSize } = opts;
  const generateGrid = () => {
    return Array(numOfRow)
      .fill("r")
      .map((_, rIndex) => (
        <Row key={rIndex} blockSize={blockSize} numOfCol={numOfCol}>
          {Array(numOfCol)
            .fill("t")
            .map((_, tIndex) => (
              <Tile
                key={tIndex}
                index={tIndex + rIndex * numOfCol}
                onTileClick={onTileClick}
                onTileHover={onTileHover}
                render={renderTile}
              />
            ))}
        </Row>
      ));
  };
  return <div className={className}>{generateGrid()}</div>;
};

export default Grid;
