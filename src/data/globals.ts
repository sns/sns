interface IGlobals {
    greeting: string;
    name: string;
    description: string;
    github: string;
    linkedin: string;
}

export const globals: IGlobals = {
    greeting: 'Hi, my name is',
    name: 'Sina Salehi',
    description: `
    I am a software engineer with particular interests
    in machine learning and optimization.
    `,
    github: 'https://github.com/sns',
    linkedin: 'https://www.linkedin.com/in/sina-salehi-bbba5942/',
};