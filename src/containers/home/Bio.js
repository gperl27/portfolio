import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Icon from 'material-ui/Icon/Icon';
import Tooltip from 'material-ui/Tooltip';


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
                            <IconButton aria-label="Email">
                                <Icon>email</Icon>
                            </IconButton>
                        </Tooltip>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(Bio);