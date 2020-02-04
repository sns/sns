export interface IContact {
    header: string;
    message: string;
    button: IButton;
}

interface IButton {
    text: string;
    link: string;
}

export const contactData: IContact = {
    header: 'Contact Me',
    message: `
        I am not currently looking for job opportunities, but my inbox is always open!
        Feel free to contact me via email or LinkedIn.
    `,
    button: {
        text: 'Email Me',
        link: 'mailto:sina.it@gmail.com',
    },
};