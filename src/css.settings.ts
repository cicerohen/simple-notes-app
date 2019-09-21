import {
  css,
  FlattenSimpleInterpolation,
  SimpleInterpolation
} from 'styled-components';

export const ROOT_FONT_SIZE = '62.5%';
export const DEFAULT_PADDING = '15px';

export const YELLOW_COLOR = '#ffcc00';
export const GREY_DARKER_COLOR = '#333';

interface MediaQuery {
  [key: string]: (
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
}

interface MediaSizes {
  small: string;
  medium: string;
  mediumOnly: string;
  large: string;
  largeOnly: string;
}

export const mediaSizes: MediaSizes = {
  small: '@media screen and (max-width: 39.9375em)',
  medium: '@media screen and (min-width: 40em)',
  mediumOnly: '@media screen and (min-width: 40em) and (max-width: 63.9375em)',
  large: '@media screen and (min-width: 64em)',
  largeOnly: '@media screen and (min-width: 64em) and (max-width: 74.9375em)'
};

export const mediaQueries = Object.keys(mediaSizes).reduce(
  (acc: MediaQuery, size: string) => {
    acc[size] = (strings, ...interpolations) => css`
      ${(mediaSizes as any)[size]} {
        ${css(strings, ...interpolations)};
      }
    `;
    return acc;
  },
  {}
);

const palettes = {
  primary: YELLOW_COLOR,
  secondary: GREY_DARKER_COLOR
};

const baseTheme = {
  palettes
};

export const themes = {
  default: {
    ...baseTheme
  }
};
