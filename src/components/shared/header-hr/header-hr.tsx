import React from 'react';
import {
    Typography,
    makeStyles,
    createStyles,
} from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        color: theme.palette.text.primary,
    },
    hr: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        margin: 'auto',
        '&::before': {
            backgroundColor: theme.palette.text.primary,
            content: '""',
            display: 'block',
            height: 2,
            position: 'relative',
            verticalAlign: 'middle',
            width: 200,
            maxWidth: 200,
            marginRight: 10,
            top: 3,
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        '&::after': {
            backgroundColor: theme.palette.text.primary,
            content: '""',
            display: 'block',
            height: 2,
            position: 'relative',
            verticalAlign: 'middle',
            width: 200,
            maxWidth: 200,
            marginLeft: 10,
            top: 3,
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
    },
}));

interface IProps extends TypographyProps {
    text: string;
}

export const HeaderHR = (props: IProps) => {
    const classes = useStyles(props);

    return (
        <div
            className={classes.hr}
        >
            <Typography
                variant='h2'
                align='center'
                className={classes.root}
                {...props}
            >
                {props.text}
            </Typography>
        </div>
    );
};