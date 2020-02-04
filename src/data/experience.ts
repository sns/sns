import * as qgenda from '../assets/experience/qgenda.png';
import * as dst from '../assets/experience/dst.png';
import umbc from '../assets/experience/umbc.svg';

export interface IExperienceData {
    header: string;
    experiences: IExperience[];
}

export interface IExperience {
    title: string;
    link: string;
    position?: string;
    duration: string;
    details: string[];
    image: IImage;
    location: string;
}

interface IImage {
    src: string;
    alt: string;
}

export const experienceData: IExperienceData = {
    header: 'Experience',
    experiences: [
        {
            title: 'QGenda',
            link: 'https://www.qgenda.com',
            position: 'Software Engineer',
            duration: 'Aug 2016 - Present',
            details: [
                "Using MVC/CQRS architecture, and technologies such as C# .NET, react, redux, and SQL Server to build an automated scheduling platform for physicians",
                "Working on a scrum team and participating in all aspects of the development process",
                "Actively participating in architecture discussions and story breakdown/planning sessions.",
                "Developing new features and making modifications to existing features including but not limited to the core scheduling algorithm.",
                "Performing code reviews"  
            ],
            image: {
                src: qgenda.default,
                alt: 'QGenda',
            },
            location: 'Atlanta, GA',
        },
        {
            title: 'SS&C(Former DST Systems)',
            link: 'https://www.ssctech.com/',
            position: 'Intern (Application Management and Development)',
            duration: 'June 2013 - Aug 2016',
            details: [
                "Designed and developed a compliance rule engine.",
                "Used technologies/tools such as Spring Framework, JBoss, Backbone.js, Handlebars.js, Junit",
                "Developed and maintained an internal self-hosted or SAAS-based social networking platform for 13.5k concurrent users.",
                "Implemented features such as user groups, file management, pre-post validations based on rule checking.",
                "Developed a platform to facilitate software development by outlining the software development lifecycle (S.D.L.C.), offer community question and answer forums, onboard associates, and schedule software product development.",
                "Used graph database to built activity stream and notification system."
            ],
            image: {
                src: dst.default,
                alt: 'DST Systems',
            },
            location: 'Baltimore, MD',
        },
        {
            title: 'UMBC',
            link: 'https://www.umbc.edu/',
            position: 'Student',
            duration: 'September 2012 - May 2014',
            details: [
                'M.S. in Computer Science',
            ],
            image: {
                src: umbc,
                alt: 'UMBC',
            },
            location: 'Baltimore, MD',
        },
    ],
};