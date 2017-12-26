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
import ProjectModalDetail from './ProjectModalDetail';

const styles = theme => ({
    root: {
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
                container
                justify="center"
                alignContent="center"
            >
                <Grid item xs={10}>
                    <ProjectList />
                </Grid>
            </Grid>
            <Dialog
                fullScreen
                open={props.dialog}
                onClose={props.closeDialog}
            >
                <div className={classes.dialogContainer}>
                    <Button fab mini onClick={props.closeDialog} aria-label="cancel" className={classes.button}>
                        <ArrowBackIcon />
                    </Button>
                    <Grid
                        className={classes.dialog}
                        container
                        justify="center"
                        alignContent="center"
                    >
                        <Grid item xs={10} md={6}>
                            <Paper className={classes.dialogContent}>
                                <ProjectModalDetail
                                    title={props.dialogTitle}
                                    summary={props.dialogSummary}
                                    images={props.dialogImages}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Dialog>
        </div >
    )
}

const mapStateToProps = state => ({
    dialogTitle: state.general.dialogContent.title,
    dialogSummary: state.general.dialogContent.summary,
    dialogImages: state.general.dialogContent.images,
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