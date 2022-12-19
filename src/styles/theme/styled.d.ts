import '@emotion/react';
import { Theme as MUITheme } from '@mui/material/styles';
/* This is the suggested way of declaring theme types */
declare module '@emotion/react' {
  export interface Theme extends MUITheme {}
}
