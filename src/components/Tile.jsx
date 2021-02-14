import { Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles({
  paper: {
    width: '25%',
    textAlign: 'center',
  },
});
const colors = {
  0: '#aeaeae',
  2: '#eee4da',
  4: '#eee1c9',
  8: '#f3b27a',
  16: '#f69664',
  32: '#f77c5f',
  64: '#f75f3b',
  128: '#edd073',
};

function Tile({ value }) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} style={{ backgroundColor: `${colors[value]}` }}>
        <p style={{ fontSize: '40px' }}>
          {value}
        </p>
      </Paper>
    </>
  );
}

Tile.defaultProps = {
  value: 1,
};

Tile.propTypes = {
  value: PropTypes.number,
};

export default Tile;
