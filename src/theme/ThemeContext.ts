import { createContext } from 'react';
import { MediaQueryInterface } from './settings';

export type toggleModeType = () => void;
export type modeType = string;

export interface ThemeContextInterface {
  mode?: modeType;
  toggleMode?: toggleModeType;
}
export interface StyledThemeContextInterface extends ThemeContextInterface {
  mediaQueries?: MediaQueryInterface;
  palette?: object;
}

const ThemeContext = createContext<ThemeContextInterface>({});

export default ThemeContext;
