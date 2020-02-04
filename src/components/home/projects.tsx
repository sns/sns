import React from 'react';
import ReactGA from 'react-ga';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    Grid,
    Typography,
    makeStyles,
    createStyles,
} from '@material-ui/core';

import { projectData } from '../../data';
import {
    SuperCenter,
    HeaderHR,
    withScrollTrigger,
    Fade,
    DropFade,
} from '../shared';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: 40,
    },
    card: {
        margin: 15,
        minHeight: 300,
    },
    header: {
        color: theme.palette.secondary.main,
    },
    skills: {
        marginLeft: 8,
        color: theme.palette.text.hint,
    },
}));

const logNavigation = (link: string) => {
    ReactGA.event({
        category: 'CardActionArea',
        action: `Nav: ${link}`,
        label: 'Projects',
    });
};

const navigate = (link: string) => {
    logNavigation(link);
    return () => {
        window.open(link, '_blank');
    };
};

const Projects = () => {
    const classes = useStyles();

    return (
        <SuperCenter>
            <DropFade>
                <HeaderHR text={projectData.header} />
            </DropFade>
            <Grid
                container
                justify='center'
                alignItems='center'
                direction='column'
                className={classes.root}
            >
                {
                    projectData.projects.map((project, index) => {
                        return (
                            <Grid
                                item
                                key={index}
                                xs={10}
                                md={6}
                            >
                                <Fade>
                                    <Card
                                        className={classes.card}
                                    >
                                        <CardActionArea onClick={navigate(project.link)}>
                                            <CardMedia
                                                component='img'
                                                image={project.image.src}
                                                title={project.image.alt}
                                            />
                                            <CardHeader
                                                title={project.title}
                                                className={classes.header}
                                            />
                                            <CardContent>
                                                <Typography variant='body1'>
                                                    {project.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Grid container>
                                                {
                                                    project.skills.map((skill, j) => {
                                                        return (
                                                            <Grid
                                                                item
                                                                key={j}
                                                            >
                                                                <Typography
                                                                    variant='body1'
                                                                    className={classes.skills}
                                                                >
                                                                    {skill}
                                                                </Typography>
                                                            </Grid>
                                                        );
                                                    })
                                                }
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Fade>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </SuperCenter>
    );
};

export default withScrollTrigger(Projects);