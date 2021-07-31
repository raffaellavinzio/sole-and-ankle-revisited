export const BREAKPOINTS = {
  phoneMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25,
};
export const QUERIES = {
  // default: Desktop is laptopMax and Up
  laptop: `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
  tablet: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  phone: `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
};
