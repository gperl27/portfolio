import React from 'react';
import Typography from 'material-ui/Typography';
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
  },
  footer: {
    textAlign: 'center',
    backgroundColor: '#E0E0E0',
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
      <footer>
        <Typography
          className={classes.footer}
          type="caption"
        >
          Copyright&copy; Greg Perlman 2018
        </Typography>
      </footer>
    </div>
  )
}

export default withStyles(styles)(App)
