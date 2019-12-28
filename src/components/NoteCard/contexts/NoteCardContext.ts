import { createContext } from 'react';

import { NoteCardContextProvider } from './interfaces';

const NoteCardContext = createContext<NoteCardContextProvider>({});

export default NoteCardContext;
