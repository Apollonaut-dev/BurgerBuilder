import React from 'react';

import classes from './NavigationList.module.css';

import NavigationItem from './NavigationItem';

type Props = {
  desktop?: boolean;
}

const nav: React.FC<Props> = (props) => (
  <nav>
    <ul className={classes.NavigationList}>
      <NavigationItem active link='#'>Burger Builder</NavigationItem>
      <NavigationItem link='#'>Checkout</NavigationItem>
    </ul>
  </nav>
);

export default nav;