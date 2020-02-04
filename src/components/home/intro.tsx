import React from 'react';
import ReactGA from 'react-ga';
import posed from 'react-pose';
import {
    createStyles,
    makeStyles,
    Typography,
    Grid,
    Link,
} from '@material-ui/core';

import { globals } from '../../data';
import {
    SuperCenter,
    ImageButton,
} from '../shared';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';

const useStyles = makeStyles((theme) => createStyles({
    greeting: {
        color: theme.palette.text.secondary,
        marginBottom: 10,
    },
    name: {
        color: theme.palette.text.primary,
        paddingBottom: 5,
        marginBottom: 20,
    },
    description: {
        maxWidth: 450,
        margin: 'auto',
        marginBottom: 100,
    },
    imageButton: {
        padding: 15,
        width: '130px',
        height: '130px',
    },
}));

const DropFade = posed.div({
    load: {
        y: '0px',
        opacity: 1,
        transition: {
            duration: 500,
        },
    },
    init: {
        y: '-100px',
        opacity: 0,
        transition: {
            duration: 500,
        },
    },
});

const Zoom = posed.div({
    load: {
        scale: '1',
        transition: {
            type: 'spring',
            stiffness: 50,
            duration: 500,
        },
    },
    init: {
        scale: '0',
        transition: {
            type: 'spring',
            stiffness: 50,
            duration: 500,
        },
    },
});

const logImageButtonClick = (name: string) => {
    return () => {
        ReactGA.event({
            category: 'ImageButton',
            action: `Click: ${name}`,
            label: 'Intro',
        });
    };
};

export const Intro = () => {
    const classes = useStyles();

    return (
        <SuperCenter>
            <DropFade>
                <Typography
                    className={classes.greeting}
                    align='center'
                    variant='h4'
                >
                    {globals.greeting}
                </Typography>
            </DropFade>
            <DropFade>
                <Typography
                    className={classes.name}
                    align='center'
                    variant='h1'
                    noWrap
                >
                    {globals.name}
                </Typography>
            </DropFade>
            <DropFade>
                <Typography
                    className={classes.description}
                    align='center'
                    variant='h6'
                >
                    {globals.description}
                </Typography>
            </DropFade>
            <Grid
                container
                justify='center'
            >
                <Grid item>
                    <Zoom>
                        <Link
                            href={globals.github}
                            target='_blank'
                            onClick={logImageButtonClick('LinkedIn')}
                        >
                            <ImageButton
                                src={github}
                                alt='GitHub'
                                className={classes.imageButton}
                            />
                        </Link>
                    </Zoom>
                </Grid>
                <Grid item>
                    <Zoom>
                        <Link
                            href={globals.linkedin}
                            target='_blank'
                            onClick={logImageButtonClick('LinkedIn')}
                        >
                            <ImageButton
                                src={linkedin}
                                alt='LinkedIn'
                                className={classes.imageButton}
                            />
                        </Link>
                    </Zoom>
                </Grid>
            </Grid>
        </SuperCenter>
    );
};