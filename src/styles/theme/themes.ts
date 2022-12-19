import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// import { darkScrollbar, PaletteMode } from '@mui/material';
import { PaletteMode } from '@mui/material';

const palette = {
  primary: {
    main: '#12a594',
    light: '#8dcec3',
    dark: '#067a6f',
    contrastText: '#fafefd',
  },
  secondary: {
    main: '#8a918e',
    light: '#d7dcda',
    dark: '#6a716e',
    contrastText: '#fbfdfc',
  },
  background: {
    default: '#f1f4f3',
  },
  error: {
    main: '#e5484d',
    light: '#f3aeaf',
    dark: '#cd2b31',
    contrastText: '#fffcfc',
  },
  warning: {
    main: '#ffb224',
    light: '#f3ba63',
    dark: '#ad5700',
    contrastText: '#4e2009',
  },
  info: {
    main: '#0091ff',
    light: '#96c7f2',
    dark: '#006adc',
    contrastText: '#fbfdff',
  },
  success: {
    main: '#30a46c',
    light: '#92ceac',
    dark: '#18794e',
    contrastText: '#fbfefc',
  },
  grey: {
    50: '#fbfdfc',
    100: '#f8faf9',
    200: '#ecefed',
    300: '#dfe4e2',
    400: '#d7dcda',
    500: '#c2c9c6',
    600: '#8a918e',
    700: '#808784',
    800: '#6a716e', // Pass accessibility check on background color and card color
    900: '#111c18',
  },
};

const light = {
  palette: {
    mode: 'light' as PaletteMode,
    ...palette,
  },
};

const dark = {
  /* MUI's dark scrollbar 

    To improve the constrast(especially on Windows).
    Note: This utility forces MacOS to always show scrollbar.

    Could use _.merge to merge components object if there are other global components overrides (styleOverrides/defaultProps).
  */
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       body: darkScrollbar(),
  //     },
  //   },
  // },
  palette: {
    mode: 'dark' as PaletteMode,
    ...palette,
  },
};

export const themes = {
  light: responsiveFontSizes(createTheme(light)),
  dark: createTheme(dark),
};
