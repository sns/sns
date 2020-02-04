import React, { useState, useEffect } from 'react';
import posed from 'react-pose';
import { ThemeProvider } from '@material-ui/styles';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import { Home } from './components/home';
import theme from './theme';
import { CssBaseline } from '@material-ui/core';

const DisplayNone = posed.div({
    load: {
        applyAtStart: { display: 'block' },
        beforeChildren: true,
        staggerChildren: 150,
    },
    init: {
        applyAtEnd: { display: 'none' },
    },
});

export const App = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <DisplayNone pose={loaded ? 'load' : 'init'}>
                    <Switch>
                        <Route
                            path='/'
                            component={Home}
                        />
                        <Redirect to='/'/>
                    </Switch>
                </DisplayNone>
            </ThemeProvider>
        </BrowserRouter>
    );
};