import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import ProjectList from './ProjectList';

const styles = theme => ({
    root: {
        backgroundColor: '#E0E0E0',
        paddingTop: '100px',
        paddingBottom: '100px',
    },
    button: {
        position: 'fixed',
        bottom: '50px',
        left: '50%'
    },
    dialogContainer: {
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
    },
    dialogContent: {
        padding: '50px',
    },
});

const Work = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid
                spacing={0}
                container
                justify="center"
                alignContent="center"
            >
                <Grid item xs={10}>
                    <ProjectList />
                </Grid>
            </Grid>
        </div >
    )
}

const mapStateToProps = state => ({
    dialogTitle: state.general.dialogContent.title,
    dialogSummary: state.general.dialogContent.summary,
    dialogImages: state.general.dialogContent.images,
    dialog: state.general.dialog,
})

export default withStyles(styles)(connect(
    mapStateToProps,
    null,
)(Work))