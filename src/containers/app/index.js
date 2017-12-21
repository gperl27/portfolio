import React from 'react';
import { withStyles } from 'material-ui/styles';
import Home from '../home';
import Header from '../home/Header';

const styles = {
  root: {
    width: '100%',
  },
};

const App = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <header>
        <Header />
      </header>

      <main>
        <Home />
      </main>
    </div>
  )
}

export default withStyles(styles)(App)
