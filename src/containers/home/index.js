import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
// import {
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync
// } from '../../modules/counter'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    marginTop: '25px',
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid 
        container
        alignItems='center'
        justify='center'
      >
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            Bio Here
          </Paper>
          <h3>
            Work
          </h3>
          <Divider/>
          <Paper className={classes.paper}>
            Contact
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Home);

// const mapStateToProps = state => ({
//   count: state.counter.count,
//   isIncrementing: state.counter.isIncrementing,
//   isDecrementing: state.counter.isDecrementing
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync,
//   changePage: () => push('/about-us')
// }, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home)
