import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon/Icon';
import Tooltip from 'material-ui/Tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import classNames from 'classnames';

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
    },
    flexGrow: {
        flex: '1 1 auto',
    },
    emailIcon: {
        color: "black",
    }
});

class Bio extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <Avatar
                        alt="Adelle Charles"
                        src="/images/profile.jpg"
                        className={classNames(classes.media, 'avatar')}
                    />
                    <CardContent>
                        <Typography className="bio-summary" type="body1" gutterBottom>
                            Hello! My name is Greg Perlman and am currently working in South Florida as a software engineer. I enjoy imagining system designs and architectures, as well as their implementations on both the front and back-ends. I'm always aiming to get a deeper understanding of the technologies I use everyday, as I feel it enhances productivity and capabilities for myself and my peers. Feel free to reach out to me with the links provided below.
                        </Typography>
                    </CardContent>
                    <CardActions disableActionSpacing>
                        <Tooltip title="Check out my github" placement="bottom">
                            <IconButton aria-label="Github Link">
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/gperl27"><img style={{ height: '25px', 'width': '25px' }} src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="Github Icon" /></a>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Connect with me on LinkedIn" placement="bottom">
                            <IconButton aria-label="LinkedIn Link">
                                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/gregperlman/"><img style={{ height: '25px', 'width': '25px' }} src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-1.svg" alt="LinkedIn Icon" /></a>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Contact Me" placement="bottom">
                            <CopyToClipboard text={email.email}
                                onCopy={() => this.props.copyEmail()}>
                                <IconButton className={classes.emailIcon} aria-label="Email">
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