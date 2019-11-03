import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  border-radius: 5px;
  cursor: pointer;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.palette.primaryColor};
  background-color: ${props => props.theme.palette.primaryColor};
  color: #fff;
`;

interface ButtonPropsInterface {
  children?: string | JSX.Element;
}

const Button: FC<ButtonPropsInterface> = ({
  children
}: ButtonPropsInterface) => <Wrapper>{children}</Wrapper>;

export default Button;
