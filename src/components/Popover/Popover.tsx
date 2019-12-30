import React from 'react';
import styled from 'styled-components';

import { PopoverPropsInterface } from './interfaces';

const Wrapper = styled.div`
  position: fixed;
  left: 200px;
  top: 200px;
`;

const Popover: React.FC<PopoverPropsInterface> = ({
  children,
  onClickOutFn
}: PopoverPropsInterface): any => {
  const ref = React.useRef();
  const evenHandler = React.useCallback(
    e => {
      const outsideClick = !ref.current.contains(e.target);
      if (onClickOutFn && outsideClick) {
        onClickOutFn();
      }
    },
    [onClickOutFn]
  );

  React.useEffect(() => {
    document.addEventListener('click', evenHandler);
    return () => {
      document.removeEventListener('click', evenHandler);
    };
  }, []);

  return <Wrapper ref={ref}>{children}</Wrapper>;
};

export default Popover;
