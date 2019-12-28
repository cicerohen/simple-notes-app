import React, { FC } from 'react';
import styled from 'styled-components';
import { MdCheck } from 'react-icons/md';
import { GiPin } from 'react-icons/gi';

import IconButton from '../IconButton';
import CardHeader from '../CardHeader';
import { useNoteCardContext } from '../NoteCard';

import { NoteCardHeaderPropsInterface } from './interfaces';

const Wrapper = styled(CardHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SelectButton = styled(IconButton).attrs({
  size: 'small'
})`
  position: absolute;
  left: -1rem;
  top: -1rem;
`;

const Title = styled.h1``;

const NoteCardHeader: FC<NoteCardHeaderPropsInterface> = ({
  title
}: NoteCardHeaderPropsInterface) => {
  const { isSelected, setIsSelected } = useNoteCardContext();

  const toggleCardSelection = (): void => setIsSelected(!isSelected);

  return (
    <Wrapper>
      <SelectButton component={MdCheck} onClick={toggleCardSelection} />
      <Title>{title}</Title>
      <IconButton component={GiPin} />
    </Wrapper>
  );
};

export default NoteCardHeader;
