import React, { FC } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

import Popover from './Popover';

import usePortal from '../../hooks/usePortal';

import { PopoverPortalPropsInterface } from './interfaces';

const PopoverPortal: FC<PopoverPortalPropsInterface> = ({
  children,
  isOpen,
  onClickOutFn
}: PopoverPortalPropsInterface) => {
  const { container } = usePortal('popover-portal');
  return ReactDOM.createPortal(
    <>{isOpen && <Popover onClickOutFn={onClickOutFn}>{children}</Popover>}</>,
    container.current
  );
};

export default PopoverPortal;
