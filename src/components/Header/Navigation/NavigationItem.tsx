import React from 'react';

import classes from './NavigationItem.module.css';

type Props = {
  link: string;
  children: string;
  active?: boolean;
}

const navItem: React.FC<Props> = (props) => (
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : ''}>
      {props.children}
    </a>
  </li>
);

export default navItem;