import React, { FC } from 'react';
import styled from 'styled-components';
import { buttonVariantMixin } from './mixins';

import { ButtonPropsInterface, ButtonStyledPropsInterface } from './types';

const Wrapper = styled.button<ButtonStyledPropsInterface>`
  border-radius: 5px;
  display: flex;
  cursor: pointer;
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
    buttonVariantMixin({
      color: props.theme.palette.primaryTextColor,
      backgroundColor: props.theme.palette.initialColor
    })};
  ${props =>
    props.variant === 'primary' &&
    buttonVariantMixin({
      color: props.theme.palette.primaryTextColor,
      backgroundColor: props.theme.palette.primaryColor
    })};
  ${props =>
    props.variant === 'secondary' &&
    buttonVariantMixin({
      color: props.theme.palette.initialColor,
      backgroundColor: props.theme.palette.secondaryColor
    })};
  ${props =>
    props.variant === 'warning' &&
    buttonVariantMixin({
      color: props.theme.palette.initialColor,
      backgroundColor: props.theme.palette.warningColor
    })};
  ${props =>
    props.variant === 'danger' &&
    buttonVariantMixin({
      color: props.theme.palette.initialColor,
      backgroundColor: props.theme.palette.dangerColor
    })};
  ${props =>
    props.variant === 'success' &&
    buttonVariantMixin({
      color: props.theme.palette.initialColor,
      backgroundColor: props.theme.palette.successColor
    })};
`;

const Button: FC<ButtonPropsInterface> = ({
  children,
  variant = 'initial',
  size = 'small',
  disabled = false,
  onClick,
  className
}: ButtonPropsInterface) => (
  <Wrapper
    className={className}
    variant={variant}
    size={size}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Wrapper>
);

export default Button;
