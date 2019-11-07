import { css } from 'styled-components';
import { darken } from 'polished';
import { buttonVariantMixinType } from './types';

export const buttonVariantMixin: buttonVariantMixinType = ({
  color,
  backgroundColor
}) => css`
  color: ${color};
  background-color: ${backgroundColor};
  border-color: ${darken('0.05', backgroundColor)};
  &:hover:enabled,
  &:focus {
    background-color: ${darken('0.05', backgroundColor)};
  }
`;
