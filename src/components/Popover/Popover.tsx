import React from 'react';
import styled from 'styled-components';

import { PopoverPropsInterface, PopoverStyledPropsInterface } from './types';

const Wrapper = styled.div<PopoverStyledPropsInterface>`
  position: fixed;
  left: ${props => props.xPos}
  top: ${props => props.yPos}
`;

const Popover: React.FC<PopoverPropsInterface> = ({
  children,
  onClickOutFn
}: PopoverPropsInterface): any => {
  const ref = React.useRef();
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const evenHandler = React.useCallback(
    e => {
      const outsideClick = !ref.current.contains(e.target);
      const coords = e.target.getBoundingClientRect();
      setPosition({
        x: coords.x,
        y: coords.y
      });
      if (onClickOutFn && outsideClick) {
        onClickOutFn();
      }
    },
    [ref.current, onClickOutFn, setPosition]
  );

  React.useEffect(() => {
    document.addEventListener('click', evenHandler);
    return () => {
      document.removeEventListener('click', evenHandler);
    };
  }, []);

  return (
    <Wrapper ref={ref} xPos={position.x} yPos={position.y}>
      {children}
    </Wrapper>
  );
};

export default Popover;
