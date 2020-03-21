import colors from './colors';

const themes = {
  light: {
    background: colors.white,
    fullContrast: colors.black,
    highContrast: colors.darkGray,
    mediumContras: colors.gray,
    lowContrast: colors.lightGray,
  },
  dark: {
    background: colors.black,
    fullContrast: colors.white,
    highContrast: colors.lightGray,
    mediumContras: colors.gray,
    lowContrast: colors.darkGray,
  },
};

export default themes;
