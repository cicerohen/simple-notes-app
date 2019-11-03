import React from 'react';
import { cleanup, render } from '@testing-library/react';
import GridContext from '../GridContext';

describe('<GridContext/> tests', () => {
  let component;
  beforeEach(() => {
    component = render(
      <GridContext.Consumer>
        {value => (
          <div>
            <p>columns:{value.columns}</p>
            <p>gutter:{value.gutter}</p>
          </div>
        )}
      </GridContext.Consumer>
    );
  });

  afterAll(cleanup);

  it('should have a correctly default value', () => {
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
