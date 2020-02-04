import React from 'react';
import {
    AppBar,
    useScrollTrigger,
    Slide,
    Hidden,
    Box,
    Toolbar,
} from '@material-ui/core';

import { HeaderMobile } from './header-mobile';
import { HeaderWeb } from './header-web';

interface IProps {
    children: React.ReactElement;
}

const ScrollBehavior = (props: IProps) => {
    const { children } = props;
    const slideTrigger = useScrollTrigger();

    return (
        <Slide
            appear={false}
            direction='down'
            in={!slideTrigger}
        >
            {children}
        </Slide>
    );
};

export const Header = () => {
    return (
        <ScrollBehavior>
            <AppBar elevation={8}>
                <Box>
                    <Toolbar>
                        <Hidden xsDown>
                            <HeaderWeb/>
                        </Hidden>
                        <Hidden smUp>
                            <HeaderMobile/>
                        </Hidden>
                    </Toolbar>
                </Box>
            </AppBar>
        </ScrollBehavior>
    );
};