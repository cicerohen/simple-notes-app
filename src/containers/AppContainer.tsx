import React, { FC } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Card from '../components/Card';

const MainContent = styled.main`
  min-height: 800px;
`;

const App: FC = () => (
  <ThemeProvider>
    <div>
      <Header />
      <MainContent>
        <Grid>
          <Grid.Row>
            <Grid.Column medium={6}>
              <Card>6 COL</Card>
            </Grid.Column>
            <Grid.Column medium={6}>
              <Card>6 COL</Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContent>
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
