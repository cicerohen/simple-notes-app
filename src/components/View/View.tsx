import React, { FC } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import { DEFAULT_PADDING } from '../../theme';

const Wrapper = styled.div``;

const MainContent = styled.main`
  min-height: 400px;
  position: relative;
  padding-top: ${DEFAULT_PADDING};
  padding-left: ${DEFAULT_PADDING};
  padding-right: ${DEFAULT_PADDING};
  max-width: 1020px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.palette.primaryColor};
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.palette.secondaryColor};
`;

interface ViewPropsInterface {
  title?: JSX.Element | Array<JSX.Element> | string;
  subtitle?: object | Array<object> | string;
  children?: JSX.Element | Array<JSX.Element>;
}

const View: FC<ViewPropsInterface> = ({
  title,
  subtitle,
  children
}: ViewPropsInterface) => {
  return (
    <Wrapper>
      <Header />
      <MainContent>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </MainContent>
    </Wrapper>
  );
};

export default View;
