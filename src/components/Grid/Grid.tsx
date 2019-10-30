import React, { FC, Context } from 'react';
import styled from 'styled-components';
import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridContext, { GridContextInterface } from './GridContext';

const Wrapper = styled.div``;

interface Props {
  children?: FC | Array<FC>;
}

export interface GridInterface<T> extends FC<T> {
  Row: FC;
  Column: FC;
  Context: Context<GridContextInterface>;
}

const Grid: GridInterface<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Grid.Row = GridRow;
Grid.Column = GridColumn;
Grid.Context = GridContext;

export default Grid;
