import React from 'react';

import classes from './Toolbar.module.css';

import NavigationList from '../Navigation/NavigationList';
import Logo from '../../Logo/Logo';
import Toggle from '../../Header/SideDrawer/Toggle/Toggle';

type Props = {
  sideDrawerToggle: () => void;
}


const toolbar: React.FC<Props> = (props) => (
  <header className={classes.Toolbar}>
    <Toggle onClick={props.sideDrawerToggle}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    {/* this wrapper is only to apply a css class which hides the duplicated navlist on desktop */}
    <div className={classes.DesktopOnly}>
      <NavigationList />
    </div>
  </header>
)

export default toolbar;
