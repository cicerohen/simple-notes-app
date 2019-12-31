import React, { FC } from 'react';
import styled from 'styled-components';
import Card from '../Card';

import NoteCardHeader from '../NoteCardHeader';
import NoteCardFooter from '../NoteCardFooter';

import { useNoteCardContext } from './contexts';
import { NoteCardStyledPropsInterface, NoteCardPropsInterface } from './types';

const Wrapper = styled(Card)<NoteCardStyledPropsInterface>`
  position: relative;
  padding: 2rem;
`;

const Body = styled.div`
  min-height: 250px;
`;

const NoteCard: FC<NoteCardPropsInterface> = ({
  title,
  children
}: NoteCardPropsInterface) => {
  const { isSelected } = useNoteCardContext();
  return (
    <Wrapper isSelected={isSelected}>
      <NoteCardHeader title={title} />
      <Body>{children}</Body>
      <NoteCardFooter />
    </Wrapper>
  );
};

export default NoteCard;
