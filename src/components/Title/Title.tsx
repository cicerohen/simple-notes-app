import React, { FC } from 'react';
import styled from 'styled-components';
import { TitlePropsInterface } from './types';

const Wrapper = styled.h1`
  text-transform: uppercase;
`;

const Title: FC<TitlePropsInterface> = ({
  size = 1,
  children
}: TitlePropsInterface) => <Wrapper>{children}</Wrapper>;

export default Title;
