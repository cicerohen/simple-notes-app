import React, { FC, FormEvent } from 'react';
import styled from 'styled-components';
import { DEFAULT_PADDING } from '../../theme';

export type onChangePropType = (event: FormEvent<HTMLInputElement>) => void;

export interface InputPropsInterface {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string | number;
  onChange?: onChangePropType;
}

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
