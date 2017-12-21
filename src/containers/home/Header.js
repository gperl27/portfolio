import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Header = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography type="title" color="inherit">
                    Greg Perlman
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;