import React from 'react';
import { DEFAULT_PADDING } from '../../css.settings';

export interface GridContextInterface {
  columns: number;
  gutter: string;
}

const GridContext = React.createContext<GridContextInterface>({
  columns: 12,
  gutter: DEFAULT_PADDING
});

export default GridContext;
