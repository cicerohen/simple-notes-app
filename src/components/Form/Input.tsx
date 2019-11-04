import React, { FC, FormEvent } from 'react';
import styled from 'styled-components';
import { DEFAULT_PADDING } from '../../theme';
import { InputPropsInterface } from './interfaces';

const Wrapper = styled.input`
  min-height: 30px;
  padding-left: ${DEFAULT_PADDING};
  padding-right: ${DEFAULT_PADDING};
`;

const Input: FC<InputPropsInterface> = ({
  type = 'text',
  placeholder,
  className,
  value,
  onChange
}: InputPropsInterface) => (
  <Wrapper
    type={type}
    placeholder={placeholder}
    className={className}
    value={value}
    onChange={onChange}
  />
);

export default Input;
