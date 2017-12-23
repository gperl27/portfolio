import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography/Typography';

import Project from './Project';

const styles = theme => ({
    root: {
        // display: 'flex',
        // flexGrow: '1 2 1',
        // flexDirection: 'column',
        // backgroundColor: 'rgb(35, 39, 65)',
        // height: '100%',
        // background: 'bottom no-repeat transparent',
        // backgroundSize: 'cover',
        // alignItems: 'center',
        // justifyContent: 'space-around',
    },
});

const ProjectList = props => {
    const { classes } = props;

    const html = (
        <p>test html being passed</p>
    )
    
    return (
        <Grid
            container
            alignItems='center'
            justify='center'
            spacing={24}
        >
            {[1, 2, 3, 4, 5, 6].map(p => <Project key={p} html={html} />)}
        </Grid>
    )
}

export default withStyles(styles)(ProjectList)