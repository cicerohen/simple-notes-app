import React, { FC } from 'react';
import { MdRefresh } from 'react-icons/md';
import { GoGear } from 'react-icons/go';
import styled from 'styled-components';
import StyledSearchBar from '../SearchBar';
import IconButton from '../IconButton';
import { DEFAULT_PADDING } from '../../theme';

const Wrapper = styled.header`
  min-height: 80px;
  display: flex;
  padding-left: ${DEFAULT_PADDING};
  padding-right: ${DEFAULT_PADDING};
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.palette.initialColor};
`;

const Title = styled.h1`
  margin-left: ${DEFAULT_PADDING};
`;

const SearchBar = styled(StyledSearchBar)`
  margin-left: ${DEFAULT_PADDING};
  margin-right: ${DEFAULT_PADDING};
  flex-basis: 80%;
  ${props => props.theme.mediaQueries.small`
    display:none;
  `}
`;

const ActionButtons = styled.div`
  display: flex;
  > * {
    margin-left: ${DEFAULT_PADDING};
  }
`;

const Header: FC = () => (
  <Wrapper>
    <Title>Keeping</Title>
    <SearchBar />
    <ActionButtons>
      <IconButton component={MdRefresh} size="medium" />
      <IconButton component={GoGear} size="medium" />
    </ActionButtons>
  </Wrapper>
);

export default Header;
