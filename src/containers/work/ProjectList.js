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
                html={wallkeepersHtml}
                title='Wallkeepers'
                subtitle='Full-stack Web Development'
                summary='Wallkeepers is an end-to-end wall-plan installation company. I helped automate their entire process from scattered, off-the-grid systems to a concise step-by-step admininstrative ecosystem.'
                technologies={['Firebase', 'Vue', 'Laravel', 'Mysql', 'jQuery', 'Stripe', 'Node']}
                link={'https://wallkeepers.com/'}
                media={'/images/wallkeepers.png'}
                contain
            />
            <Project
                html={goforaHtml}
                title='GoForA'
                subtitle='Full-stack iOS Development'
                summary='GoForA is an iOS app that aims to connect people together through user-made events. I built out both the server-side and mobile services, including features such as real-time chat, in-app purchases, authentication, and other core iOS features.'
                technologies={['Swift', 'Fireabase', 'Node']}
                link={'https://itunes.apple.com/us/app/gofora/id1291450689'}
                media={'/images/gofora-hand.png'}
            />
            <Project
                html={jetrideHtml}
                title='JetRide'
                subtitle='Full-stack Web Development'
                summary='JetRide is a subscription-based boating company out of South Florida. My involvement included creating the system architecture, a full-blown reservation system, a customized CRM, an accounting portal, and more.'
                technologies={['Laravel', 'React', 'Mysql', 'jQuery', 'Stripe', 'Twilio']}
                link={'https://jetride.com/'}
                media={'/images/sunset.jpg'}
            />
            <Project
                html={curatorHtml}
                title='Curator'
                subtitle='Full-stack Web Development'
                summary='Curator is an all-in-one digital delivery platform. I have aided in enhancing the system architecture, front-end development, payment services, and various other microservices.'
                technologies={['React', 'Laravel', 'Mysql', 'jQuery', 'Stripe', 'Twilio']}
                link={'https://www.curatorlive.com/'}
                media={'/images/curator-logo.png'}
            />
             <Project
                html={youiHtml}
                title='Youi'
                subtitle='Full-stack Web Development'
                summary='Built during my Ironhack enrollment (2016), Youi is an experimental web-app that builds its own styles based on simple user inputs. It features a crowd-sourced homepage, custom styling templates, and an in-depth analytics platform.'
                technologies={['Rails', 'jQuery', 'Postgres']}
                link={'https://young-refuge-15003.herokuapp.com/'}
                media={'/images/youi.png'}
                contain
            />
        </Grid>
    )
}

export default withStyles(styles)(ProjectList)