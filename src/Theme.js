import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: pink[300]
    },
    primary: {
      main: '#fff' //indigo[700]
    }
  },
  typography: {
    useNextVariants: true,
    fontWeight: 100,
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 0
      },
    },
  },
});

export default ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);