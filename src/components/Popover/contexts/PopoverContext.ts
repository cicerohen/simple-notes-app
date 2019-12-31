import { createContext } from 'react';
import { PopoverContextInterface } from './types';

const PopoverContext = createContext<PopoverContextInterface>({});

export default PopoverContext;
