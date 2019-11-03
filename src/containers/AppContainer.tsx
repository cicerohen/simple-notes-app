import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '../theme';
import HomeContainer from './pages/HomeContainer';

const App: FC = () => (
  <ThemeProvider>
    <Router>
      <Switch>
        <Route path="/">
          <HomeContainer />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
