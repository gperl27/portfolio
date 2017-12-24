import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import { openDialog } from '../../modules/general';

const styles = {
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

const Project = props => {
  const { classes } = props;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://jetride.com/assets/base/img/layout/logos/JetRide_white_xs.png"
          title="Jetride"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {props.title}
          </Typography>
          <Typography type="subheading" gutterBottom>
            {props.subtitle}
          </Typography>
          <Typography component="p">
            {props.summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Button target="_blank" href={props.link} dense color="primary">
            Visit
          </Button>
          <Button onClick={() => props.openDialog(props.html)} dense color="primary">
            More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  openDialog,
}, dispatch)

export default withStyles(styles)(connect(
  null,
  mapDispatchToProps,
)(Project))