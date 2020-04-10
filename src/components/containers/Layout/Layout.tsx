import React, { Component } from 'react';
import { Autobind } from '../../../util/decorators';
import classes from './Layout.module.css';


import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Toolbar from '../../Header/Toolbar/Toolbar';
import SideDrawer from '../../Header/SideDrawer/SideDrawer';

type Props = {
  // header: React.ReactNode;
  // main: React.ReactNode[];
  // footer: React.ReactNode;
}

type State = {
  sideDrawerShow: boolean;
  backdropShow: boolean;
  backdropCloseListeners: Function[];
}

class Layout extends Component<Props, State> {
  state = {
    sideDrawerShow: false,
    backdropShow: false,
    /**
     * maintain a list of backdropClose listeners in case backdrop is shown from two places
     * e.g. if order button and mobile nav show backdrop, both UI elements must react to closing the backdrop
     * clear this list on close since every UI element which cares we assume will be reset by the callback it 
     * provides.
     * essentially, this allows multiple components requiring a backdrop to all react to the backdrop closing
     */
    backdropCloseListeners: []
  }

  @Autobind
  showBackdrop(closeHandler?: () => void) {
    this.setState({ backdropShow: true }, () => {
      if (closeHandler) {
        this.setState({
          backdropCloseListeners: [
            ...this.state.backdropCloseListeners,
            closeHandler
          ]
        });
      }
    });
  }

  @Autobind
  hideBackdrop() {
    this.setState({ sideDrawerShow: false, backdropShow: false }, () => {
      if (this.state.backdropCloseListeners.length) {
        this.state.backdropCloseListeners.map(f => (f as Function)());
      }
      /**
       * note: it is intended that listeners will be set up by event handlers, so each time the backdrop is 
       * triggered, these listeners will be added again
       * without this line, we get an infinite call stack; no bueno
       */
      this.setState({ backdropCloseListeners: [] });
    });
  }

  @Autobind
  sideDrawerShow() {
    this.setState({ sideDrawerShow: true }, this.showBackdrop);
  }

  @Autobind
  hideSideDrawer() {
    this.hideBackdrop();
  }

  @Autobind
  sideDrawerToggle() {
    if (this.state.sideDrawerShow) {
      this.hideSideDrawer();
    } else {
      this.sideDrawerShow();
    }
  }

  render() {
    return (
      <>
        <Backdrop
          close={this.hideSideDrawer}
          show={this.state.backdropShow} />
        <Toolbar 
          sideDrawerToggle={this.sideDrawerToggle} />
        <SideDrawer 
          open={this.state.sideDrawerShow} />
        <main className={classes.Content}>
          <BurgerBuilder 
            showBackdrop={this.showBackdrop} 
            hideBackdrop={this.hideBackdrop}/>
        </main>
      </>
    );
  }
}

export default Layout;