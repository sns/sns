import React from 'react';
import ReactGA from 'react-ga';
import {
    Grid,
    makeStyles,
    createStyles,
    Typography,
    Link,
    Paper,
} from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

import {
    experienceData,
    IExperience,
} from '../../data';

import {
    SuperCenter,
    HeaderHR,
    ImageButton,
    withScrollTrigger,
    DropFade,
    LeftFade,
    RightFade,
    Fade,
} from '../shared';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        width: '100%',
    },
    container: {
        width: '100%',
    },
    item: {
        width: '100%',
        marginTop: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        maxWidth: 300,
        maxHeight: 300,
    },
    content: {
        paddingTop: 20,
    },
    contentContainer: {
        padding: 32,
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 500,
        marginTop: 50,
    },
    contentHeader: {
        color: theme.palette.primary.main,
        fontWeight: 500,
    },
    location: {
        marginBottom: 10,
    },
    row: {
        paddingTop: 10,
    },
}));

const logImageButtonClick = (name: string) => {
    return () => {
        ReactGA.event({
            category: 'ImageButton',
            action: `Click: ${name}`,
            label: 'Experience',
        });
    };
};

interface IExperienceProps extends IExperience {
    index: number;
}

const Experience = () => {
    const classes = useStyles();

    return (
        <SuperCenter>
            <DropFade>
                <HeaderHR text={experienceData.header}/>
            </DropFade>
            <Grid
                container
                alignItems='center'
                wrap='nowrap'
                direction='column'
                className={classes.container}
            >
                {
                    experienceData.experiences.map((experience, index) => {
                        return (
                            <Grid item key={index} className={classes.item}>
                                <ExperienceItem {...experience} index={index}/>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </SuperCenter>
    );
};

const PictureContainer = (props: IExperience) => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='center'
        >
            <Grid item>
                <Link
                    href={props.link}
                    target='_blank'
                    onClick={logImageButtonClick(props.title)}
                >
                    <ImageButton
                        src={props.image.src}
                        alt={props.image.alt}
                        className={classes.image}
                    />
                </Link>
            </Grid>
        </Grid>
    );
};

const ExperienceItem = (props: IExperienceProps) => {
    const classes = useStyles();

    const title = () => {
        return (
            <Typography
                variant='h4'
                align='center'
                className={classes.title}
            >
                {props.title}
            </Typography>
        );
    };

    const data = () => {
        return (
            <Grid
                container
                justify='center'
                alignItems='center'
                direction={(props.index % 2 !== 0) ? 'row' : 'row-reverse'}
                className={classes.row}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <PictureContainer {...props}/>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    className={classes.content}
                >
                    <Paper
                        className={classes.contentContainer}
                        elevation={8}
                    >
                        <Fade>
                            <Typography
                                variant='h6'
                                className={classes.contentHeader}
                            >
                                {props.position}
                            </Typography>
                        </Fade>
                        <Fade>
                            <Typography
                                variant='h6'
                            >
                                {props.duration}
                            </Typography>
                        </Fade>
                        <Fade>
                            <Typography
                                variant='h6'
                                className={classes.location}
                            >
                                {props.location}
                            </Typography>
                        </Fade>
                        {
                            props.details.map((detail, index) => {
                                return (
                                    <Fade key={index}>
                                        <Grid
                                            container
                                            wrap='nowrap'
                                        >
                                            <Grid item>
                                                <ArrowRight/>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='body1'>
                                                    {detail}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                );
                            })
                        }
                    </Paper>
                </Grid>
            </Grid>
        );
    };

    return (
        <>
            {
                props.index % 2 !== 0
                ? (
                    <>
                        <RightFade>
                            {
                                title()
                            }
                        </RightFade>
                        <RightFade>
                            {
                                data()
                            }
                        </RightFade>
                    </>
                )
                : (
                    <>
                        <LeftFade>
                            {
                                title()
                            }
                        </LeftFade>
                        <LeftFade>
                            {
                                data()
                            }
                        </LeftFade>
                    </>
                )
            }
        </>
    );
};

export default withScrollTrigger(Experience);