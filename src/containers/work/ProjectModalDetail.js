import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Slider from 'react-slick';
import Left from 'material-ui-icons/KeyboardArrowLeft';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = theme => ({
    // styles here
    summary: {
        fontSize: '20px',
        marginBottom: '25px',
    },
    img: {
        height: 'auto',
        width: '100%',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary[200],
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

const prepImageDataForGallery = images => {
    return images.map(image => {
        return {
            original: image,
            thumbnail: image,
        }
    })
}

const ProjectModalDetail = props => {
    const { classes } = props;

    const left = <Left />

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={classes.container}>
            <Typography type="display3" gutterBottom>
                {props.title}
            </Typography>
            <Typography type="body1" className={classes.summary} gutterBottom>
                {props.summary}
            </Typography>
            <Slider {...settings}>
                {props.images.map((image, index) => {
                    return (
                        <img key={index} className={classes.img} src={image} />
                    )
                })}
            </Slider>
        </div >
    );
}

export default withStyles(styles)(ProjectModalDetail);