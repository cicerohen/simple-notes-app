import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

describe('<Anchor /> Tests', () => {
  let component;

  beforeEach(() => {
    component = render(<Card />);
  });

  it('should render correctly without props', () => {
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    component.rerender(
      <Card>
        <div>children</div>
      </Card>
    );
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
