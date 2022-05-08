import styled from "styled-components";

interface RowProps {
    width: number;
    blockSize: number;
}

export const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  user-select: none;
  width: ${props => props.width}px;
  height: ${props => props.blockSize}px;
`;
