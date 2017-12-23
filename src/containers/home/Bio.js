import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon/Icon';
import Tooltip from 'material-ui/Tooltip';
import Snackbar from 'material-ui/Snackbar';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import email from '../../constants/email';
import { copyEmail } from '../../modules/general';

const styles = theme => ({
    card: {
        paddingTop: '15px',
    },
    media: {
        height: '150px',
        width: '150px',
        margin: 'auto',
        // marginTop: '15px',
    },
    flexGrow: {
        flex: '1 1 auto',
    },
});

class Bio extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <Avatar
                        alt="Adelle Charles"
                        src="https://pbs.twimg.com/profile_images/924904314715258880/_yBUUYAY_400x400.jpg"
                        className={classes.media}
                    />
                    <CardContent>
                        <Typography component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableActionSpacing>
                        <Tooltip title="Check out my github" placement="bottom">
                            <IconButton aria-label="Github Link">
                                <img style={{ height: '25px', 'width': '25px' }} src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="Github Icon" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Connect with me on LinkedIn" placement="bottom">
                            <IconButton aria-label="LinkedIn Link">
                                <img style={{ height: '25px', 'width': '25px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/CIS-A2K_Linkedin_Icon_%28Black%29.svg/600px-CIS-A2K_Linkedin_Icon_%28Black%29.svg.png" alt="LinkedIn Icon" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Contact Me" placement="bottom">
                            <CopyToClipboard text={email.email}
                                onCopy={() => this.props.copyEmail()}>
                                <IconButton aria-label="Email">
                                    <Icon>email</Icon>
                                </IconButton>
                            </CopyToClipboard>
                        </Tooltip>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    copyEmail,
}, dispatch)

export default withStyles(styles)(connect(
    null,
    mapDispatchToProps,
  )(Bio))