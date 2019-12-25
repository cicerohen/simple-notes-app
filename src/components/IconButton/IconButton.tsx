import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { IconButtonPropsInterface } from './interfaces';

const Wrapper = styled(Button).attrs(() => ({
  size: 'large'
}))`
  padding: 0.5em;
  border-radius: 50%;
`;

const IconButton: FC<IconButtonPropsInterface> = ({
  component,
  variant,
  className
}: IconButtonPropsInterface) => (
  <Wrapper variant={variant} className={className}>
    {component({})}
  </Wrapper>
);

export default IconButton;
