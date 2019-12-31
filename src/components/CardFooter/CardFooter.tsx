import React, { FC } from 'react';
import styled from 'styled-components';

import { CardFooterPropsInterface } from './types';

const Wrapper = styled.footer``;

const CardFooter: FC<CardFooterPropsInterface> = ({
  children,
  className
}: CardFooterPropsInterface) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default CardFooter;
