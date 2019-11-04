import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from '../components/GlobalStyles';
import { ThemeProvider } from '../theme';
import HomeContainer from './pages/HomeContainer';

const App: FC = () => (
  <ThemeProvider>
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
    </>
  </ThemeProvider>
);

export default App;
