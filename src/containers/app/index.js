import React from 'react';
import { withStyles } from 'material-ui/styles';
import Home from '../home';
import Work from '../work';

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
      <section>
        <Work />
      </section>
    </div>
  )
}

export default withStyles(styles)(App)
