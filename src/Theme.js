import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: '#fff' //indigo[700]
    }
  },
  typography: {
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  },
});

export default ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);