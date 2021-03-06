import React, { FC, useContext } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import GridContext from './GridContext';
import { mediaQueries } from '../../theme';
import { flexBasisCalc } from './utils';

const flexBasis = (
  col: number,
  columns: number
): FlattenSimpleInterpolation => css`
  flex-basis: ${flexBasisCalc(col, columns)};
`;

interface StyledProps {
  gutter: string;
  columns: number;
  small?: number;
  medium?: number;
  large?: number;
}

const Wrapper = styled.div<StyledProps>`
	display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: ${({ gutter }) => gutter};
  padding-right: ${({ gutter }) => gutter};
  ${props => flexBasis(props.columns, props.columns)}
  ${props =>
    props.small &&
    mediaQueries.small`
  	${flexBasis(props.small, props.columns)}; 
  `}
  ${props =>
    props.medium &&
    mediaQueries.medium`
  	${flexBasis(props.medium, props.columns)}; 
  `}
  ${props =>
    props.large &&
    mediaQueries.large`
  	${flexBasis(props.large, props.columns)}; 
  `}
`;

interface Props {
  children?: object | Array<object>;
  small?: number;
  medium?: number;
  large?: number;
}

const GridColumn: FC<Props> = ({ children, small, medium, large }: Props) => {
  const { columns, gutter } = useContext(GridContext);
  return (
    <Wrapper
      columns={columns}
      gutter={gutter}
      small={small}
      medium={medium}
      large={large}
      data-testid="grid-column"
    >
      {children}
    </Wrapper>
  );
};

export default GridColumn;
