export interface NoteCardContextProvider {
  isSelected?: boolean;
  setIsSelected?: (isSelected: boolean) => void;
}

export interface NoteCardProviderPropsInterface {
  children?: any;
}
