import React, { FC } from 'react';
import styled from 'styled-components';

import { CardHeaderPropsInterface } from './interfaces';

const Wrapper = styled.header``;

const CardHeader: FC<CardHeaderPropsInterface> = ({
  children,
  className
}: CardHeaderPropsInterface) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default CardHeader;
