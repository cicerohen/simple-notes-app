export const flexBasisCalc = (col: number, columns: number): string =>
  `${(col / columns) * 100}%`;
