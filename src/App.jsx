import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Card } from '@material-ui/core';
import Board from './components/Board';

const useStyles = makeStyles({
  card: {
    paddingLeft: '10px',
    margin: 'auto',
    marginBottom: '10px',
    maxWidth: '710px',
  },
});

const themes = {
  darkTheme: createMuiTheme({
    palette: {
      type: 'dark',
    },
  }),
  lightTheme: createMuiTheme({
    palette: {
      type: 'light',
    },
  }),
};

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={themes.darkTheme}>
      <Card className={classes.card}>
        <p style={{ fontSize: '40px' }}>
          Simple-2048
        </p>
      </Card>
      <Board />
    </ThemeProvider>
  );
}

export default App;
