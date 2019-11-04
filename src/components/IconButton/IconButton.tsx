import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { IconButtonPropsInterface } from './interfaces';

const Wrapper = styled(Button)`
  padding: 10px;
  border-radius: 50%;
`;

const IconButton: FC<IconButtonPropsInterface> = ({
  component,
  variant,
  size
}: IconButtonPropsInterface) => (
  <Wrapper variant={variant} size={size}>
    {component({})}
  </Wrapper>
);

export default IconButton;
