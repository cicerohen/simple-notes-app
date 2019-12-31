import { useContext } from 'react';
import NoteCardContext from './NoteCardContext';
import { NoteCardContextProvider } from './types';

const useNoteCardContext = (): NoteCardContextProvider =>
  useContext(NoteCardContext);

export default useNoteCardContext;
