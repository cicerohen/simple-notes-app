import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

interface Props {
  children?: object | Array<object>;
}

const GridRow: FC = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default GridRow;
