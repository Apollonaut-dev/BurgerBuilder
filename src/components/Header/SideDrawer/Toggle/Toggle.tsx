import React from 'react';
import classes from './Toggle.module.css';

type Props = {
  onClick: () => void;
}

const toggle: React.FC<Props> = (props) => (
  <div className={classes.DrawerToggle} onClick={props.onClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default toggle;