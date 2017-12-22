import React from 'react';
import { withStyles } from 'material-ui/styles';
import Home from '../home';
import Header from '../home/Header';

const styles = {
  root: {
    width: '100%',
    height: '100%',
  },
  main: {
    height: '100%',
  }
};

const App = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <Home />
      </main>
      <div>Work here</div>
    </div>
  )
}

export default withStyles(styles)(App)
