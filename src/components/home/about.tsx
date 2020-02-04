import React from 'react';
import ReactGA from 'react-ga';
import {
    Grid,
    Typography,
    makeStyles,
    createStyles,
    Link,
    Button,
} from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

import { aboutData } from '../../data';
import {
    SuperCenter,
    HeaderHR,
    DropFade,
    LeftFade,
    withScrollTrigger,
} from '../shared';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: 50,
    },
    image: {
        marginLeft: 100,
        [theme.breakpoints.down('sm')]: {
            margin: '0px auto',
            marginBottom: 40,
        },
        borderRadius: 10,
        maxWidth: 300,
        maxHeight: 300,
    },
    content: {
        maxWidth: 500,
    },
    button: {
        marginTop: 40,
        marginBottom: 40,
    },
    lineSpace: {
        marginTop: '1em',
    },
}));

const logLinkClick = (name: string) => {
    return () => {
        ReactGA.event({
            category: 'Link',
            action: `Click: ${name}`,
            label: 'About',
        });
    };
};

const logButtonClick = (name: string) => {
    return () => {
        ReactGA.event({
            category: 'Button',
            action: `View: ${name}`,
            label: 'About',
        });
    };
};

export const About = () => {
    const classes = useStyles();

    return (
        <SuperCenter>
            <DropFade>
                <HeaderHR text={aboutData.header}/>
            </DropFade>
            <Grid
                container
                justify='center'
                className={classes.root}
            >
                <Grid
                    item
                    xs={12}
                    sm={8}
                    className={classes.content}
                >
                    <LeftFade>
                        <Typography variant='body1' color='textPrimary'>
                            I am a highly motivated individual, possessing excellent time management skills.
                            Some topics of particular interest to me include machine learning and optimization.
                        </Typography>
                    </LeftFade>
                    <LeftFade>
                        <Typography
                            variant='body1'
                            className={classes.lineSpace}
                            color='textPrimary'
                        >
                            I graduated from the
                            &nbsp;
                            <Link
                                href='https://umbc.edu'
                                target='_blank'
                                color='secondary'
                                onClick={logLinkClick('umbc')}
                            >
                                University of Maryland Baltimore County
                            </Link>
                            &nbsp;
                            in May 2014 with masters degree in Computer Science.
                        </Typography>
                    </LeftFade>
                    <LeftFade>
                        <Typography variant='body1' className={classes.lineSpace} color='textPrimary'>
                            Here are some technologies I'm familiar with:
                        </Typography>
                    </LeftFade>
                    <Grid
                        container
                        justify='center'
                        className={classes.lineSpace}
                    >
                        {
                            aboutData.skills.map((skill, index) => {
                                return (
                                    <Grid
                                        key={index}
                                        item
                                        xs={6}
                                    >
                                        <LeftFade>
                                            <Grid container>
                                                <Grid item>
                                                    <ArrowRight color='secondary'/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant='body1' color='textPrimary'>
                                                        {skill}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </LeftFade>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                    <LeftFade>
                        <Grid
                            container
                            justify='flex-start'
                        >
                            <Grid item>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    href={aboutData.button.link}
                                    target='_blank'
                                    className={classes.button}
                                    onClick={logButtonClick('Resume')}
                                >
                                    {aboutData.button.text}
                                </Button>
                            </Grid>
                        </Grid>
                    </LeftFade>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
                >
                    <Grid
                        container
                        justify='center'
                    >
                        <img
                            src={aboutData.image.src}
                            alt={aboutData.image.alt}
                            className={classes.image}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </SuperCenter>
    );
};

export default withScrollTrigger(About);