import React, { FC } from 'react';
import styled from 'styled-components';
import Input from './Input';

const Wrapper = styled.form``;

interface Props {
  children: object | Array<object>;
}

export interface FormInterface<T> extends FC<T> {
  Input: FC;
}

const Form: FormInterface<Props> = ({ children }: Props) => (
  <Wrapper>{children}</Wrapper>
);

Form.Input = Input;

export default Form;
