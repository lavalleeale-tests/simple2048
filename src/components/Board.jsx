import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import Tile from './Tile';
import handleKeys from './keyHandler';

const useStyles = makeStyles((theme) => ({
  row: {
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  root: {
    margin: 'auto',
    padding: 'auto',
    maxWidth: '580px',
    outline: 'none',
  },
  card: {
    padding: '20px 10px 20px 10px',
    margin: 'auto',
    maxWidth: '700px',
  },
}));

function Board() {
  const [values, setValues] = useState([]);
  function init() {
    // eslint-disable-next-line prefer-const
    let initialValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    initialValues[Math.floor(Math.random() * 15)] = 2;
    setValues(initialValues);
  }
  const classes = useStyles();

  if (values.length === 0) {
    init();
  }
  return (
    <Card className={classes.card}>
      <div
        className={classes.root}
        onKeyDown={(event) => handleKeys(event, values, setValues)}
        role="button"
        tabIndex="0"
      >
        <div className={classes.row}>
          <Tile value={values[0]} />
          <Tile value={values[4]} />
          <Tile value={values[8]} />
          <Tile value={values[12]} />
        </div>
        <div className={classes.row}>
          <Tile value={values[1]} />
          <Tile value={values[5]} />
          <Tile value={values[9]} />
          <Tile value={values[13]} />
        </div>
        <div className={classes.row}>
          <Tile value={values[2]} />
          <Tile value={values[6]} />
          <Tile value={values[10]} />
          <Tile value={values[14]} />
        </div>
        <div className={classes.row}>
          <Tile value={values[3]} />
          <Tile value={values[7]} />
          <Tile value={values[11]} />
          <Tile value={values[15]} />
        </div>
      </div>
    </Card>
  );
}

export default Board;
