import React, { FC } from 'react';
import styled from 'styled-components';
import { DEFAULT_PADDING } from '../../theme';

import { cardActiveMixin } from './mixins';
import { CardPropsInterface } from './types';

const Wrapper = styled.section`
  border-width: 1px;
  border-style: solid;
  padding: ${DEFAULT_PADDING};
  border-color: ${props => props.theme.palette.initialColor};
  border-radius: 5px;
  &:hover {
    ${props =>
      cardActiveMixin({ borderColor: props.theme.palette.initialColor })}
  }
`;

const Card: FC<CardPropsInterface> = ({
  children,
  className
}: CardPropsInterface) => <Wrapper className={className}>{children}</Wrapper>;

export default Card;
