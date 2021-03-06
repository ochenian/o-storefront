import { keyframes, css } from 'styled-components';

/*
 * NOTE: use a six-character hex code for all colors to allow alpha channel
 * adjustment without adding extra vars and/or a color manipulation lib.
 *
 * Example:
 *    // use the brand color at 25% opacity
 *    border-color: ${colors.brand}40;
 */
export const colors = {
  brandDarker: '#221133',
  brandDark: '#d4004c',
  brand: `#f40075`,
  brandBright: '#ffb0cd',
  brandLight: '#ffe3e3',
  brandLighter: '#fbfafc',
  lightest: '#ffffff',
  darkest: '#4d4058',
  text: '#333333',
  textMild: '#555555',
  textLight: '#7e718a',
  textLighter: '#aaaaaa',
  navy: `#43546a`,
  accent: `#f5bc5e`,
  error: `#ec1818`,
  lemon: `#ffdf37`,
  black: `#000`,
};

export const badgeThemes = {
  BUILDWITHGATSBY: {
    level: 1,
    backgroundTheme: colors.brand,
    textTheme: colors.lemon,
  },
  HOLYBUCKETS: {
    level: 2,
    backgroundTheme: colors.lemon,
    textTheme: colors.brandDark,
  },
};

export const spacing = {
  '3xs': 2,
  '2xs': 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
};

export const breakpoints = {
  mobile: 400,
  phablet: 550,
  tablet: 750,
  desktop: 1000,
  hd: 1300,
};

export const radius = {
  default: 2,
  large: 4,
};

export const defaultFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Open Sans',
  'Helvetica Neue',
  'sans-serif',
].join();

const monospaceFontStack = [
  `Space Mono`,
  `SFMono-Regular`,
  `Menlo`,
  `Monaco`,
  `Consolas`,
  `Liberation Mono`,
  `Courier New`,
  `monospace`,
].join();

export const fonts = {
  body: defaultFontStack,
  heading: `tk-futura-pt-bold-n7, ${defaultFontStack}`,
  monospace: monospaceFontStack,
};

export const dimensions = {
  headerHeight: '100px',
  cartWidthDesktop: '500px',
  contributorAreaWidth: {
    closedDesktop: '60px',
    openDesktop: '340px',
    openHd: '420px',
  },
  contributorAreaBarHeight: '50px',
  pictureBrowserAction: {
    widthDesktop: '200px',
    heightMobile: '80px',
  },
};

export const scrollbarStyles = {
  WebkitOverflowScrolling: `touch`,
  '&::-webkit-scrollbar': { width: `6px`, height: `6px` },
  '&::-webkit-scrollbar-thumb': { background: colors.brandBright },
  '&::-webkit-scrollbar-thumb:hover': { background: colors.brand },
  '&::-webkit-scrollbar-track': { background: colors.brandLight },
};

export const scroll = {
  // Locomotive Scroll
  // https://github.com/locomotivemtl/locomotive-scroll#instance-options
  container: '[data-scroll-container]',
  options: {
    smooth: true,
    smoothMobile: false,
    getDirection: true,
    touchMultiplier: 2.5,
    lerp: 0.15,
  },
};
