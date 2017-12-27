import React from 'react'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Project from './Project';

const styles = theme => ({
    root: {
        //styles here
    },
});

const ProjectList = props => {
    const { classes } = props;

    return (
        <Grid
            container
            alignItems='flex-start'
            justify='center'
            spacing={40}
        >
            <Project
                title='Wallkeepers'
                subtitle='Full-stack Web Development'
                summary='Wallkeepers is an end-to-end wall-plan installation company. I helped automate their entire process from scattered, off-the-grid systems to a concise step-by-step admininstrative ecosystem.'
                technologies={['Firebase', 'Vue', 'Laravel', 'Mysql', 'jQuery', 'Stripe', 'Node']}
                link={'https://wallkeepers.com/'}
                media={'/images/wallkeepers.png'}
                contain
            />
            <Project
                title='JetRide'
                subtitle='Full-stack Web Development'
                summary='JetRide is a subscription-based boating company out of South Florida. My involvement included creating the system architecture, a full-blown reservation system, a customized CRM, an accounting portal, and more.'
                technologies={['Laravel', 'React', 'Mysql', 'jQuery', 'Stripe', 'Twilio']}
                link={'https://jetride.com/'}
                media={'/images/sunset.jpg'}
            />
            <Project
                title='Curator'
                subtitle='Full-stack Web Development'
                summary='Curator is an all-in-one digital delivery platform. I have aided in enhancing the system architecture, front-end development, payment services, and various other microservices.'
                technologies={['React', 'Laravel', 'Mysql', 'jQuery', 'Stripe', 'Twilio']}
                link={'https://www.curatorlive.com/'}
                media={'/images/curator-logo.png'}
                contain
            />
            <Project
                title='GoForA'
                subtitle='Full-stack iOS Development'
                summary='GoForA is an iOS app that aims to connect people together through user-made events. I built out both the server-side and mobile services, including features such as real-time chat, in-app purchases, authentication, and other core iOS features.'
                technologies={['Swift', 'Firebase', 'Node']}
                link={'https://itunes.apple.com/us/app/gofora/id1291450689'}
                media={'/images/gofora-hand.png'}
                contain
            />
            <Project
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