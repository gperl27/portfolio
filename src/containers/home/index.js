import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Particles from 'react-particles-js';
import Bio from './Bio';

import particleOptions from '../../assets/particles';
import Typography from 'material-ui/Typography/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: '1 2 1',
    flexDirection: 'column',
    backgroundColor: 'rgb(35, 39, 65)',
    height: '100%',
    background: 'bottom no-repeat transparent',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  paper: {
    marginTop: '25px',
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  particles: {
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%'
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Particles
        className={classes.particles}
        params={particleOptions}
      />
      <Grid
        container
        alignItems='center'
        justify='center'
      >
        <Grid item md={4} sm={6} xs={10}>
            <Bio/>
        </Grid>
      </Grid>
      <h3 style={{color: 'white'}}>See work below</h3>
    </div>
  )
}

export default withStyles(styles)(Home);