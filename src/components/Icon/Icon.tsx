import React, { FC } from 'react';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const Wrapper = styled.span`
  display: inline-flex;
  border-radius: 50%;
  > svg {
    padding: 0.5em;
  }
`;

interface IconPropsInterface {
  component: FC;
  size?: string;
  color?: string;
  className?: string;
}

const Icon: FC<IconPropsInterface> = ({
  size = '16',
  color,
  component,
  className
}: IconPropsInterface) => (
  <Wrapper className={className}>
    <IconContext.Provider value={{ color, size }}>
      {component({})}
    </IconContext.Provider>
  </Wrapper>
);

export default Icon;
