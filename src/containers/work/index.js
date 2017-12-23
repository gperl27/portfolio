import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography/Typography';
import Dialog from 'material-ui/Dialog';

import { openDialog, closeDialog } from '../../modules/general';

import ProjectList from './ProjectList';

const styles = theme => ({
    root: {
        marginTop: '25px',
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
                <button onClick={props.closeDialog}>close me</button>
                {props.dialogHtml}
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