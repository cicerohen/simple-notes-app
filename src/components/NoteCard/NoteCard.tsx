import React, { FC } from 'react';
import styled from 'styled-components';
import { MdCheck, MdAddAlert, MdArchive } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Card from '../Card';
import { NoteCardPropsInterface } from './interfaces';

import IconButton from '../IconButton';
import { DEFAULT_PADDING } from '../../theme';

const Wrapper = styled(Card)`
  position: relative;
`;

const ToggleSelectionBtn = styled(IconButton)`
  position: absolute;
  left: -${DEFAULT_PADDING};
  top: -${DEFAULT_PADDING};
`;

const Body = styled.div`
  min-height: 250px;
`;

const Footer = styled.footer`
  display: flex;
  margin-top: ${DEFAULT_PADDING};
  > * {
    margin-left: 2.5px;
    margin-right: 2.5px;
  }
`;

const NoteCard: FC<NoteCardPropsInterface> = ({
  title,
  children
}: NoteCardPropsInterface) => (
  <Wrapper>
    <ToggleSelectionBtn component={MdCheck} />
    <header>{title}</header>
    <Body>{children}</Body>
    <Footer>
      <IconButton component={MdAddAlert} />
      <IconButton component={AiOutlineUserAdd} />
      <IconButton component={MdArchive} />
    </Footer>
  </Wrapper>
);

export default NoteCard;
