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

    const jetrideHtml = (
        <p>Jetride here</p>
    )

    const wallkeepersHtml = (
        <p>WK here</p>
    )

    const goforaHtml = (
        <p>Gofora here</p>
    )

    const curatorHtml = (
        <p>Curator Html</p>
    )

    const youiHtml = (
        <p>Youi Html</p>
    )



    return (
        <Grid
            container
            alignItems='center'
            justify='center'
            spacing={24}
        >
            <Project
                html={jetrideHtml}
                title='JetRide'
                subtitle='Full-stack Web Development'
                summary='JetRide is a subscription-based boating company out of South Florida. My involvement included creating the system architecture, a full-blown reservation system, a customized CRM, an accounting portal, and more.'
                link={'https://jetride.com/'}
            />
            <Project
                html={wallkeepersHtml}
                title='Wallkeepers'
                subtitle='Full-stack Web Development'
                summary='Wallkeepers is an end-to-end wall-plan installation company. I helped automate their entire process from scattered, off-the-grid systems to a concise step-by-step admininstrative ecosystem.'
                link={'https://wallkeepers.com/'}
            />
            <Project
                html={goforaHtml}
                title='GoForA'
                subtitle='Full-stack iOS Development'
                summary='GoForA is an iOS app that aims to connect people together through user-made events. I built out both the server-side and mobile services, including features such as real-time chat, in-app purchases, authentication services, and many more core iOS features.'
                link={'https://itunes.apple.com/us/app/gofora/id1291450689'}
            />
            <Project
                html={curatorHtml}
                title='Curator'
                subtitle='Full-stack Web Development'
                summary='Curator is an all-in-one digital delivery platform. I have aided in enhancing the system architecture, front-end development, payment services, and various other microservices.'
                link={'https://www.curatorlive.com/'}
            />
             <Project
                html={youiHtml}
                title='Youi'
                subtitle='Full-stack Web Development'
                summary='Built during my Ironhack enrollment (2016), Youi is an experimental web-app that builds its own styles based on simple user inputs. It features a crowd-sourced homepage, custom styling templates, and an in-depth analytics platform.'
                link={'https://young-refuge-15003.herokuapp.com/'}
            />
        </Grid>
    )
}

export default withStyles(styles)(ProjectList)