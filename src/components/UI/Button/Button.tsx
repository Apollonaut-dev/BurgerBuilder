import React from 'react';

import classes from './Button.module.css';

type Props = {
  onClick: (event?: React.MouseEvent) => void;
  buttonType: 'Success' | 'Danger'; // defined in CSS file
}

const button: React.FC<Props> = (props) => (
  <button
    className={[classes.Button, classes[props.buttonType]].join(' ')}
    onClick={props.onClick} >{props.children}
  </button>
);

export default button;