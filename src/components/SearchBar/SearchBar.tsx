import React, { FC } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import StyledInput from '../Input';
import IconButton from '../IconButton';
import { DEFAULT_PADDING } from '../../theme';
import { SearchBarPropsInterface } from './interfaces';

const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.initialColor};
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: ${DEFAULT_PADDING};
`;

const Input = styled(StyledInput)`
  border: 0;
  flex: 1;
  background-color: inherit;
`;

const SearchBar: FC<SearchBarPropsInterface> = ({
  className
}: SearchBarPropsInterface) => (
  <Wrapper className={className}>
    <IconButton component={FaSearch} />
    <Input placeholder="Search" />
  </Wrapper>
);

export default SearchBar;
