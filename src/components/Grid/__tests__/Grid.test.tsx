import React from 'react';
import { render } from '@testing-library/react';
import Grid from '../Grid';

describe('<Grid /> tests', () => {
  let component;

  beforeEach(() => {
    component = render(<Grid />);
  });

  xit('should render correctly without props', () => {
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
