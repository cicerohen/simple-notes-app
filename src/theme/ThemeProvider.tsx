import React, { FC } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import ThemeContext, {
  ThemeContextInterface,
  StyledThemeContextInterface
} from './ThemeContext';
import useThemeContextState from './useThemeContextState';
import { mediaQueries, palette } from './settings';

interface Props {
  children?: JSX.Element;
}

const ThemeProvider: FC<Props> = ({ children }: Props) => {
  const { mode, toggleMode } = useThemeContextState();
  const value: ThemeContextInterface = { mode, toggleMode };
  const theme: StyledThemeContextInterface = { mode, mediaQueries, palette };
  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
