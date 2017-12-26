import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    container: {
        position: 'absolute',
        top: '25px',
        left: '25px',
    },
    header: {
        color: '#fff',
    },
});

const Header = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <Typography className={classes.header} type="title">
                Greg Perlman
            </Typography>
            <Typography className={classes.header} type="subheading">
                Software Engineer &#9900; UX Enthusiast
            </Typography>
        </div>
    );
}

export default withStyles(styles)(Header);