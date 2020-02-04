    import React from 'react';
    import ReactGA from 'react-ga';
    import {
        Grid,
        makeStyles,
        IconButton,
        createStyles,
        Typography,
        Link,
    } from '@material-ui/core';

    import { globals } from '../../../data';
    import {
        GitHub,
        LinkedIn,
    } from '../../shared/icons';

    const useStyles = makeStyles((theme) => createStyles({
        root: {
            height: 64,
            background: theme.palette.primary.main,
        },
    }));

    const logImageButtonClick = (name: string) => {
        return () => {
            ReactGA.event({
                category: 'ImageButton',
                action: `Click: ${name}`,
                label: 'Footer',
            });
        };
    };

    export const Footer = () => {
        const classes = useStyles();

        return (
            <Grid
                container
                justify='center'
                alignItems='center'
                alignContent='center'
                direction='column'
                className={classes.root}
            >
                <Grid item>
                    <Grid
                        container
                        justify='center'
                    >
                        <Grid item>
                            <IconButton
                                size='small'
                                component={Link}
                                href={globals.github}
                                target='_blank'
                                onClick={logImageButtonClick('GitHub')}
                            >
                                <GitHub color='secondary'/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                size='small'
                                component={Link}
                                href={globals.linkedin}
                                target='_blank'
                                onClick={logImageButtonClick('LinkedIn')}
                            >
                                <LinkedIn color='secondary'/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        color='secondary'
                        variant='body1'
                    >
                        {globals.name}
                    </Typography>
                </Grid>
            </Grid>
        );
    };