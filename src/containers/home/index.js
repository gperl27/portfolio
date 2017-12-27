import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Particles from 'react-particles-js';
import Typography from 'material-ui/Typography/Typography';
import Snackbar from 'material-ui/Snackbar';

import { unsetSnackbar } from '../../modules/general';

import Bio from './Bio';
import Header from './Header';
import particleOptions from '../../assets/particles';

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
  },
});

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Header />
      <Particles
        className={classes.particles}
        params={particleOptions}
      />
      <Grid
        spacing={0}
        container
        alignItems='center'
        justify='center'
      >
        <Grid item md={4} sm={6} xs={10}>
          <Bio />
        </Grid>
      </Grid>
      <Typography type="display1" gutterBottom style={{ color: 'white' }}>See work below</Typography>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={props.copied}
        autoHideDuration={6000}
        onClose={() => props.unsetSnackbar()}
        message={<span>{props.snackText}</span>}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  snackText: state.general.snackText,
  copied: state.general.copied,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  unsetSnackbar,
}, dispatch)

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home))