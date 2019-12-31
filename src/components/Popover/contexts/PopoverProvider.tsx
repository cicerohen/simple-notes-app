import React, { FC } from 'react';
import PopoverContext from './PopoverContext';

import { PopoverContextInterface, PopoverProviderInterface } from './types';

const PopoverProvider: FC<PopoverProviderInterface> = ({
  children
}: PopoverProviderInterface) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const value: PopoverContextInterface = { position, setPosition };
  return (
    <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
  );
};

export default PopoverProvider;
