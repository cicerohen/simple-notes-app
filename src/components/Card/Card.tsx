import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  box-shadow: 0 0 5px #999;
`;

interface Props {
  children?: object | Array<object>;
}

const Card: FC<Props> = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default Card;
