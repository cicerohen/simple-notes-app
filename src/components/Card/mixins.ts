import { css } from 'styled-components';
import { darken } from 'polished';

import { cardActiveMixinType } from './types';

export const cardActiveMixin: cardActiveMixinType = ({ borderColor }) => css`
  box-shadow: 0 0 2px ${darken('0.1', borderColor)};
`;
