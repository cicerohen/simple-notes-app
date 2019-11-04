import React, { FC } from 'react';
import styled from 'styled-components';
import { variantMixin } from './mixins';

import { ButtonPropsInterface, ButtonStyledPropsInterface } from './interfaces';

const Wrapper = styled.button<ButtonStyledPropsInterface>`
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  padding-left: 1.5em;
  padding-right: 1.5em;
  border-width: 1px;
  border-style: solid;
  text-transform: uppercase;
  padding: 0.9rem 1.2rem;
  font-weight: 400;
  white-space: nowrap;
  ${props =>
    props.disabled &&
    `
    opacity: 0.3;
    cursor: not-allowed;
  `};
  ${props =>
    props.size === 'small' &&
    `
    font-size: 1rem;
  `};
  ${props =>
    props.size === 'medium' &&
    `
    font-size: 1.4rem;
  `};
  ${props =>
    props.size === 'large' &&
    `
    font-size: 2.5rem;
  `};

  ${props =>
    props.variant === 'initial' &&
    variantMixin({
      color: props.theme.palette.secondaryColor,
      backgroundColor: props.theme.palette.initialColor
    })};
  ${props =>
    props.variant === 'primary' &&
    variantMixin({
      color: props.theme.palette.secondaryColor,
      backgroundColor: props.theme.palette.primaryColor
    })};
  ${props =>
    props.variant === 'secondary' &&
    variantMixin({
      color: props.theme.palette.initialColor,
      backgroundColor: props.theme.palette.secondaryColor
    })};
  ${props =>
    props.variant === 'warning' &&
    variantMixin({
      color: props.theme.palette.initialColor,
      backgroundColor: props.theme.palette.warningColor
    })};
  ${props =>
    props.variant === 'danger' &&
    variantMixin({
      color: props.theme.palette.initialColor,
      backgroundColor: props.theme.palette.dangerColor
    })};
`;

const Button: FC<ButtonPropsInterface> = ({
  children,
  variant = 'initial',
  size = 'small',
  disabled = false,
  className
}: ButtonPropsInterface) => (
  <Wrapper
    className={className}
    variant={variant}
    size={size}
    disabled={disabled}
  >
    {children}
  </Wrapper>
);

export default Button;
