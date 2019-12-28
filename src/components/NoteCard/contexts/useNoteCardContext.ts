import { useContext } from 'react';
import NoteCardContext from './NoteCardContext';
import { NoteCardContextProvider } from './interfaces';

const useNoteCardContext = (): NoteCardContextProvider =>
  useContext(NoteCardContext);

export default useNoteCardContext;
