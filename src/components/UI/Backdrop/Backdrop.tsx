import React from 'react';

import classes from './Backdrop.module.css';

type Props = {
  show: boolean; 
  close: () => void;
}

const backdrop: React.FC<Props> = props => (
  props.show ? <div onClick={props.close} className={classes.Backdrop}></div> : null
);

export default backdrop;