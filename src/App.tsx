import React, { Component } from 'react';
import classes from './App.css';

import Layout from './components/containers/Layout/Layout';

class App extends Component {

  render(): React.ReactElement {
    return (
      <div className={classes.Root}>
        <Layout />
      </div>
    )
  }
}

export default App;
