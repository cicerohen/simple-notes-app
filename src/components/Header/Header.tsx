import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: #fc0;
  min-height: 80px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header: FC = () => (
  <Wrapper>
    <Title>Simple notes app</Title>
  </Wrapper>
);

export default Header;
