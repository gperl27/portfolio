import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import classnames from 'classnames';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  media: {
    height: 300,
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    marginRight: '5px',
    marginBottom: '5px',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  divider: {
    marginTop: '25px',
    marginBottom: '25px',
  }
});

class Project extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const {
      classes,
      media,
      contain,
      title,
      subtitle,
      technologies,
      link,
      summary,
    } = this.props;

    return (
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            style={contain ? { backgroundSize: 'contain' } : null}
            image={media}
            title={title}
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {title}
            </Typography>
            <Typography type="subheading" gutterBottom>
              {subtitle}
            </Typography>

          </CardContent>
          <CardActions>
            <Button target="_blank" href={link} dense color="primary">
              SEE IT LIVE
            </Button>
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography type="body1" gutterBottom>
                {summary}
              </Typography>
              <Divider className={classes.divider} />
              <div className={classes.row}>
                {technologies.map((chip, index) => {
                  return (
                    <Chip key={index} className={classes.chip} label={chip} />
                  )
                })}
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(Project);