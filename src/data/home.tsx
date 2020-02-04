import React from 'react';

import {
    About,
    Contact,
    Experience,
    Projects,
} from '../components/home';

export interface ISection {
    headerContent: string;
    link: string;
    element: (props: ISection) => React.ReactElement;
}

export const content: ISection[] = [
    {
        headerContent: 'About',
        link: 'about',
        element: () => <About/>,
    },
    {
        headerContent: 'Experience',
        link: 'experience',
        element: () => <Experience/>,
    },
    {
        headerContent: 'Projects',
        link: 'projects',
        element: () => <Projects/>,
    },
    {
        headerContent: 'Contact',
        link: 'contact',
        element: () => <Contact/>,
    },
];