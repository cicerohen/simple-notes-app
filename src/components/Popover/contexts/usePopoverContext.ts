import { useContext } from 'react';
import PopoverContext from './PopoverContext';
import { PopoverContextInterface } from './types';

const usePopoverContext = (): PopoverContextInterface =>
  useContext(PopoverContext);

export default usePopoverContext;
