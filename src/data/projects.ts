import * as site from '../assets/projects/sns.dev.png';
import { globals } from './globals';

export interface IProjectData {
    header: string;
    projects: IProject[];
}

export interface IProject {
    title: string;
    description: string;
    link: string;
    image: Image;
    skills: string[];
}

interface Image {
    src: string;
    alt: string;
}

export const projectData: IProjectData = {
    header: 'Projects',
    projects: [
        {
            title: 'sns.dev',
            description: 'Personal website built using react and hosted on Google Firebase',
            link: `${globals.github}/sns`,
            image: {
                src: site.default,
                alt: 'sns.dev',
            },
            skills: [
                'Firebase',
                'GCP',
                'React',
                'Typescript',
            ],
        }
    ],
};