import React from 'react';
import { cleanup, render } from '@testing-library/react';
import GridColumn from '../GridColumn';
import GridContext, { GridContextInterface } from '../GridContext';
import { flexBasisCalc } from '../utils';
import { DEFAULT_PADDING, mediaSizes } from '../../../css.settings';

describe('<GridColumn /> tests', () => {
  let component;
  const providerValue: GridContextInterface = {
    columns: 12,
    gutter: DEFAULT_PADDING
  };

  beforeEach(() => {
    component = render(
      <GridContext.Provider value={providerValue}>
        <GridColumn />
      </GridContext.Provider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should be styled correctly with padding(left/right)', async () => {
    const gridColumn = await component.findByTestId('grid-column');
    expect(gridColumn).toHaveStyleRule('padding-left', providerValue.gutter);
    expect(gridColumn).toHaveStyleRule('padding-right', providerValue.gutter);
  });

  it('should be styled correctly with flex-basis when media props is not passed', async () => {
    const gridColumn = await component.findByTestId('grid-column');
    const flexBasisValue = flexBasisCalc(
      providerValue.columns,
      providerValue.columns
    );
    expect(gridColumn).toHaveStyleRule('flex-basis', flexBasisValue);
  });

  it('should be styled correctly with flex-basis when media props is passed', async () => {
    const props = { small: 2, medium: 3, large: 4 };

    component.rerender(
      <GridContext.Provider value={providerValue}>
        <GridColumn {...props}>
          <div>children</div>
        </GridColumn>
      </GridContext.Provider>
    );

    const gridColumn = await component.findByTestId('grid-column');

    const flexBasisSmall = flexBasisCalc(props.small, providerValue.columns);
    const flexBasisMedium = flexBasisCalc(props.medium, providerValue.columns);
    const flexBasisLarge = flexBasisCalc(props.large, providerValue.columns);

    expect(gridColumn).toHaveStyleRule('flex-basis', flexBasisSmall, {
      media: mediaSizes.small
    });

    expect(gridColumn).toHaveStyleRule('flex-basis', flexBasisMedium, {
      media: mediaSizes.medium
    });

    expect(gridColumn).toHaveStyleRule('flex-basis', flexBasisLarge, {
      media: mediaSizes.large
    });
  });
});
