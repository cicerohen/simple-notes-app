import { useContext } from 'react';
import ThemeContext, { ThemeContextInterface } from './ThemeContext';

const useThemeContext = (): ThemeContextInterface => useContext(ThemeContext);

export default useThemeContext;
