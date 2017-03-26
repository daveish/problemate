import { css } from 'styled-components';

export const media = {
  smartphone: (...args) => css`
    @media only screen and (min-device-width: 20rem) and (max-device-width: 30rem) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media only screen and (min-device-width : 48rem) and (max-device-width : 64rem) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media only screen  and (min-width : 76.5rem) {
      ${css(...args)}
    }
  `,
  largeDesktop: (...args) => css`
    @media only screen and (min-width: 114rem) {
      ${css(...args)}
    }
  `,
};
