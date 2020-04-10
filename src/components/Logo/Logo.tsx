import React from 'react';

import classes from './Logo.module.css';

// create-react-app's webpack config will automatically package this with our source and deliver it to the app in an optimized way, simple setting this src attribute dynamically like this will get the path to react's optimized asset delivery
import Logo from '../../assets/images/logo.png';

const logo: React.FC = () => (
  <div className={classes.Logo}>
    <img src={Logo} alt="Burger Builder" />
  </div>
);

export default logo;