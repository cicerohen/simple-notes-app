import React, { FC } from 'react';
import NoteCardContext from './NoteCardContext';

import {
  NoteCardProviderPropsInterface,
  NoteCardContextProvider
} from './types';

const NoteCardProvider: FC<NoteCardProviderPropsInterface> = ({
  children
}: NoteCardProviderPropsInterface) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const value: NoteCardContextProvider = { isSelected, setIsSelected };
  return (
    <NoteCardContext.Provider value={value}>
      {children}
    </NoteCardContext.Provider>
  );
};

export default NoteCardProvider;
