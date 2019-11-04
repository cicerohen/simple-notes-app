import { css, FlattenSimpleInterpolation } from 'styled-components';
import { darken } from 'polished';
import { variantMixinType } from './types';

export const variantMixin: variantMixinType = ({
  color,
  backgroundColor
}) => css`
  color: ${color};
  background-color: ${backgroundColor};
  border-color: ${darken('0.05', backgroundColor)};
  &:hover:enabled {
    background-color: ${darken('0.05', backgroundColor)};
  }
`;
