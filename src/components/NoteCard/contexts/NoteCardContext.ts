import { createContext } from 'react';

import { NoteCardContextProvider } from './types';

const NoteCardContext = createContext<NoteCardContextProvider>({});

export default NoteCardContext;
