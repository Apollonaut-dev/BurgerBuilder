import React from 'react';

import classes from './BuildControl.module.css';

type Props = {
  label: string;
  disabled: boolean;
  addHandler: () => void;
  removeHandler: () => void;
}

const buildControl: React.FC<Props> = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button disabled={props.disabled} onClick={props.removeHandler} className={classes.Less}>Less</button>
    <button onClick={props.addHandler} className={classes.More}>More</button>
  </div>
);

export default buildControl;