import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography/Typography';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import Paper from 'material-ui/Paper';

import { openDialog, closeDialog } from '../../modules/general';

import ProjectList from './ProjectList';

const styles = theme => ({
    root: {
        marginTop: '25px',
    },
    button: {
        position: 'fixed',
        top: '25px',
        left: '25px'
    },
    dialog: {
        backgroundColor: 'blue',
    },
    dialogContent: {
        marginTop: '100px',
        padding: '25px',
    },
});

const Work = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid
                container
                justify="center"
                alignContent="center"
            >
                <Grid item xs={10}>
                    <ProjectList />
                </Grid>
            </Grid>

            <button onClick={props.openDialog}>open me</button>
            <Dialog
                fullScreen
                open={props.dialog}
                onClose={props.closeDialog}
            >
                <Button fab mini onClick={props.closeDialog} color="primary" aria-label="cancel" className={classes.button}>
                    <ArrowBackIcon />
                </Button>
                <Grid
                    className={classes.dialog}
                    container
                    justify="center"
                    alignContent="center"
                >
                    <Grid item xs={10}>
                        <Paper className={classes.dialogContent}>
                            {props.dialogHtml}
                        </Paper>
                    </Grid>
                </Grid>
            </Dialog>
        </div >
    )
}

const mapStateToProps = state => ({
    dialogHtml: state.general.dialogHtml,
    dialog: state.general.dialog,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    openDialog,
    closeDialog
}, dispatch)

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Work))