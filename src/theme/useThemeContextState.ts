import { useCallback, useState } from 'react';
import { toggleModeType, modeType } from './ThemeContext';

type useThemeContextStateType = {
  mode: modeType;
  toggleMode: toggleModeType;
};

const useThemeContextState = (): useThemeContextStateType => {
  const [mode, setMode] = useState('light');
  const toggleMode = useCallback(() => {
    const toggleValue = (mode === 'light' && 'dark') || mode;
    setMode(toggleValue);
  }, []);
  return { mode, toggleMode };
};

export default useThemeContextState;
