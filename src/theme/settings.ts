import {
  css,
  FlattenSimpleInterpolation,
  SimpleInterpolation
} from 'styled-components';

export const ROOT_FONT_SIZE = '62.5%';
export const DEFAULT_PADDING = '10px';

export const YELLOW_COLOR = '#FFC107';
export const ORANGE_COLOR = '#FF7A19';
export const RED_COLOR = '#F44336';
export const GREEN_COLOR = '#528948';

export const GREY_LIGHTER_COLOR = '#f1f1f1';
export const GREY_DARKER_COLOR = '#333';
export const GREY_BLUE_COLOR = '#607D8B';

export const BLACK_COLOR = '#222';

export interface MediaSizesInterface {
  small: string;
  medium: string;
  mediumOnly: string;
  large: string;
  largeOnly: string;
}

export interface MediaQueryInterface {
  [key: string]: (
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
}

export const mediaSizes: MediaSizesInterface = {
  small: 'screen and (max-width: 39.9375em)',
  medium: 'screen and (min-width: 40em)',
  mediumOnly: 'screen and (min-width: 40em) and (max-width: 63.9375em)',
  large: 'screen and (min-width: 64em)',
  largeOnly: 'screen and (min-width: 64em) and (max-width: 74.9375em)'
};

export const mediaQueries = Object.keys(mediaSizes).reduce(
  (acc: MediaQueryInterface, size: string) => {
    acc[size] = (strings, ...interpolations) => css`
      @media ${(mediaSizes as any)[size]} {
        ${css(strings, ...interpolations)};
      }
    `;
    return acc;
  },
  {}
);

export const palette = {
  initialColor: GREY_LIGHTER_COLOR,
  primaryColor: YELLOW_COLOR,
  secondaryColor: GREY_BLUE_COLOR,
  primaryTextColor: GREY_DARKER_COLOR,
  dangerColor: RED_COLOR,
  warningColor: ORANGE_COLOR,
  successColor: GREEN_COLOR
};
