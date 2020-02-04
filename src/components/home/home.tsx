import React from 'react';
import {
    Box,
    Container,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import {
    Header,
    Footer,
} from '../shared';
import {
    ISection,
    content,
} from '../../data';
import { Intro } from '.';
import theme from '../../theme';
import darkTheme from '../../theme-dark';

export const Home = () => {
    return (
        <>
            <Header/>
            <Box height={10}/>
            <Intro/>
            {
                content.map((item: ISection, index: number) => {
                    return (
                        <Box
                            id={item.link}
                            bgcolor={(index % 2 !== 0) ? undefined : 'primary.dark'}
                            key={index}
                        >
                            <Container maxWidth='lg'>
                                <ThemeProvider theme={(index % 2 !== 0) ? theme : darkTheme}>
                                    {
                                        item.element(item)
                                    }
                                </ThemeProvider>
                            </Container>
                        </Box>
                    );
                })
            }
            <Footer/>
        </>
    );
};