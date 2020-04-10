import React from 'react';

import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationList from '../Navigation/NavigationList';

type Props = {
  open: boolean;
};

const sidedrawer: React.FC<Props> = (props) => {
  return (
    <div className={[classes.SideDrawer, props.open ? classes.Open : classes.Close].join(' ')}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <NavigationList />
    </div>
  )
};

export default sidedrawer;