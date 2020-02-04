import React from 'react';
import ReactGA from 'react-ga';
import {
    Grid,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    makeStyles,
    createStyles,
} from '@material-ui/core';
import {
    Menu,
    Close,
} from '@material-ui/icons';
import { Link } from 'react-scroll';

import {
    content,
    ISection,
} from '../../../data/home';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: 'inherit',
    },
    active: {
        fontWeight: 'bolder',
    },
    listItemText: {
        color: 'red',
    },
}));

const logButtonClick = (name: string) => {
    ReactGA.event({
        category: 'Button',
        action: `Click: ${name}`,
        label: 'Header',
    });
};

export const HeaderMobile = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
    });

    const toggleDrawer = () => {
        setState({open: !state.open});
    };

    const onClickDrawerToggle = () => {
        logButtonClick('Drawer Toggle');
        toggleDrawer();
    };

    const onClickLink = (name: string) => {
        return () => {
            logButtonClick(`${name}`);
            toggleDrawer();
        };
    };

    return (
        <>
            <Grid
                container
                justify='flex-end'
                alignItems='center'
                className={classes.root}
            >
                <Grid item>
                    <IconButton onClick={onClickDrawerToggle}>
                        {(state.open) ? <Close color='secondary'/> : <Menu color='secondary'/>}
                    </IconButton>
                </Grid>
            </Grid>
            <Drawer anchor='top' open={state.open} onClose={toggleDrawer}>
                <Toolbar/>
                <List>
                    {
                        content.map((item: ISection) => {
                            return (
                                <ListItem
                                    key={content.indexOf(item)}
                                    onClick={onClickLink(item.headerContent)}
                                    component={Link}
                                    smooth={true}
                                    duration={500}
                                    hashSpy={true}
                                    spy={true}
                                    to={item.link}
                                    color='secondary'
                                    activeClass={classes.active}
                                >
                                    <ListItemText
                                        primary={item.headerContent}
                                    />
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Drawer>
        </>
    );
};