import React, { FC } from 'react';
import styled from 'styled-components';
import { MdArchive } from 'react-icons/md';

import IconButton from '../IconButton';

import CardFooter from '../CardFooter';

const Wrapper = styled(CardFooter)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NoteCardFooter: FC = () => (
  <Wrapper>
    <IconButton component={MdArchive} />
  </Wrapper>
);

export default NoteCardFooter;
