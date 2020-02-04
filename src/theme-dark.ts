import {
    createMuiTheme,
    responsiveFontSizes,
} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#31708E',
        },
        secondary: {
            main: '#8bbbe3',
        },
        background: {
            default: '#F7F9FB',
        },
        type: 'dark',
    },
    spacing: 4,
    zIndex: {
        appBar: 1400,
    },
});

theme.typography.h1.fontWeight = 600;
theme.typography.h2.fontWeight = 500;

export default responsiveFontSizes(theme);