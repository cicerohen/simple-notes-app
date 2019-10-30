import React from 'react';
import { render } from '@testing-library/react';
import GridColumn from '../GridColumn';
import GridContext, { GridContextInterface } from '../GridContext';
import * as utils from '../utils';
import { DEFAULT_PADDING } from '../../../css.settings';

const flexBasisCalcSpy = jest.spyOn(utils, 'flexBasisCalc');

describe('<GridColumn /> tests', () => {
  let component;
  const providerValue: GridContextInterface = {
    columns: 12,
    gutter: DEFAULT_PADDING
  };
  beforeEach(() => {
    component = render(<GridColumn />);
  });

  it('should be styled correctly with flex-basis when media props is not passed', async () => {
    component.rerender(
      <GridContext.Provider value={providerValue}>
        <GridColumn></GridColumn>
      </GridContext.Provider>
    );
    const gridColumn = await component.findByTestId('grid-column');
    expect(flexBasisCalcSpy).toHaveBeenLastCalledWith(
      providerValue.columns,
      providerValue.columns
    );
    const flexBasisValue = flexBasisCalcSpy.mock.results[0].value;
    expect(gridColumn).toHaveStyleRule('flex-basis', flexBasisValue);
  });
});
