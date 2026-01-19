import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    midnightBalanced: {
      main: string;
    };
    skyBold: {
      main: string;
    };
  }
  interface PaletteOptions {
    midnightBalanced?: {
      main?: string;
    };
    skyBold?: {
      main?: string;
    };
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1328,
      xl: 1920,
    },
  },
  palette: {
    midnightBalanced: {
      main: '#4F6076',
    },
    skyBold: {
      main: '#69A2FF',
    },
    background: {
      default: '#ECEBE7'
    },
  },
});
