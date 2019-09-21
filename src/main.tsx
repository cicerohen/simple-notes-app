import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './components/GlobalStyles';
import AppContainer from './containers/AppContainer';

ReactDOM.render(
  <>
    <GlobalStyles />
    <AppContainer />
  </>,
  document.getElementById('app')
);
