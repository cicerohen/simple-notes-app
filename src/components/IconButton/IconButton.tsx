import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { IconButtonPropsInterface } from './interfaces';

const Wrapper = styled(Button).attrs(() => ({}))`
  padding: 0.5em;
  border-radius: 50%;
  ${props =>
    props.size === 'small' &&
    `
    font-size: 1.4rem;
  `};
  ${props =>
    props.size === 'medium' &&
    `
    font-size: 1.6rem;
  `};
  ${props =>
    props.size === 'large' &&
    `
    font-size: 2.5rem;
  `};
`;

const IconButton: FC<IconButtonPropsInterface> = ({
  component,
  variant,
  size = 'small',
  className,
  onClick
}: IconButtonPropsInterface) => (
  <Wrapper
    variant={variant}
    size={size}
    className={className}
    onClick={onClick}
  >
    {component({})}
  </Wrapper>
);

export default IconButton;
