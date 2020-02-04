import React from 'react';
import ReactGA from 'react-ga';
import {
    Typography,
    Button,
    makeStyles,
    Grid,
    Link,
} from '@material-ui/core';

import { contactData } from '../../data';
import {
    SuperCenter,
    HeaderHR,
    withScrollTrigger,
    DropFade,
} from '../shared';

const useStyles = makeStyles({
    message: {
        marginTop: 40,
        maxWidth: 450,
        marginBottom: 40,
        margin: 'auto',
    },
    emailButton: {
        margin: 'auto',
    },
});

const logButtonClick = (name: string) => {
    return () => {
        ReactGA.event({
            category: 'Button',
            action: `Click: ${name}`,
            label: 'Contact',
        });
    };
};

const Contact = () => {
    const classes = useStyles();

    return (
        <SuperCenter>
            <DropFade>
                <HeaderHR text={contactData.header}/>
            </DropFade>
            <DropFade>
                <Typography
                    align='center'
                    className={classes.message}
                >
                    {contactData.message}
                </Typography>
            </DropFade>
            <Grid
                container
                justify='center'
            >
                <Grid item>
                    <Link
                        href={contactData.button.link}
                        target='_blank'
                    >
                        <DropFade>
                            <Button
                                variant='contained'
                                size='large'
                                color='primary'
                                className={classes.emailButton}
                                onClick={logButtonClick('email')}
                            >
                                {contactData.button.text}
                            </Button>
                        </DropFade>
                    </Link>
                </Grid>
            </Grid>
        </SuperCenter>
    );
};

export default withScrollTrigger(Contact);