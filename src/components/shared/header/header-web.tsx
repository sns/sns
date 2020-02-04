import React from 'react';
import posed from 'react-pose';
import ReactGA from 'react-ga';
import {
    Grid,
    Button,
} from '@material-ui/core';
import {
    makeStyles,
} from '@material-ui/styles';
import { Link } from 'react-scroll';

import { content } from '../../../data/home';

const useStyles = makeStyles({
    button: {
        width: 130,
    },
    active: {
        fontWeight: 'bolder',
    },
});

const LeftFade = posed.div({
    load: {
        x: '0px',
        opacity: 1,
        transition: {
            duration: 500,
        },
    },
    init: {
        x: '-100px',
        opacity: 0,
        transition: {
            duration: 500,
        },
    },
  });

const logButtonClick = (name: string) => {
    return () => {
        ReactGA.event({
            category: 'Button',
            action: `Click: ${name}`,
            label: 'Header',
        });
    };
};

export const HeaderWeb = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='center'
            alignItems='center'
            spacing={4}
        >
            {
                content.map((item) => {
                    return (
                        <Grid
                            key={content.indexOf(item)}
                            item
                        >
                            <LeftFade>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    component={Link}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    hashSpy={true}
                                    to={item.link}
                                    activeClass={classes.active}
                                    className={classes.button}
                                    onClick={logButtonClick(item.headerContent)}
                                >
                                    {item.headerContent}
                                </Button>
                            </LeftFade>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
};