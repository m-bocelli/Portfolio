export type Project = {
    title: string;
    image: string;
    description: string;
    stack: string[];
    source: string;
    updated: _Date;
};

export type _Date = {
    month: number;
    year: number;
};

/*
// Hard coded project list for backup
export const PROJECTS: Project[] = [
    {
        title: 'Boids Simulation',
        description:
            'A 3D implementation of the Boids Algorithm, performed by crows in Unity. Invented by computer graphics expert Craig Reynolds, the boids algorithm simulates the coordinated motion of animals such as a flock of birds or a school of fish. I came across the algorithm accidentally while researching the animation techniques behind a game called Shadow of the Colossus on an internet forum. After discovering it, I was motivated to implement it myself in a 3D game engine environment with the intent of utilizing it for future projects.',
        stack: ['Unity', 'C#'],
        resources: [
            'http://www.kfish.org/boids/index.html',
            'https://eater.net/boids',
            'https://www.red3d.com/cwr/boids/',
        ],
        source: 'https://github.com/m-bocelli/Boids-Simulation',
        updated: { month: 6, year: 2020 },
    },
    {
        title: 'Portfolio',
        description:
            'My first webpage, besides a Spongebob wiki I made for a class in 9th grade. What I enjoy most about this project is all the extra knowledge which comes as a byproduct while researching HTML and CSS. Although this is true for other projects, I have not taken a web development course, so while teaching myself the basics I come across interesting features I might not have otherwise (albeit getting sidetracked at times). ',
        stack: ['HTML', 'CSS', 'JavaScript'],
        resources: [
            'https://www.w3schools.com/html/',
            'https://stackoverflow.com/',
        ],
        source: 'https://github.com/m-bocelli/Portfolio-DEFUNCT',
        updated: { month: 6, year: 2020 },
    },
    {
        title: 'React Portfolio',
        description: 'Foo',
        stack: ['React', 'Vite', 'HTML', 'CSS', 'TypeScript', 'Vite'],
        resources: ['https://react.dev/reference/react'],
        source: 'https://github.com/m-bocelli/Portfolio',
        updated: { month: 6, year: 2020 },
    },
    {
        title: 'SDL Platformer',
        description: 'A study in C++ game design.',
        stack: ['C++', 'SDL2'],
        resources: ['https://wiki.libsdl.org/SDL2/FrontPage'],
        source: 'https://github.com/m-bocelli/SDL-Platofrmer',
        updated: { month: 6, year: 2020 },
    },
    {
        title: 'WFC Tile Generator',
        description:
            'A study of the Wave Function Collapse algorithm via bitmap tile generation using the SDL2 library.',
        stack: ['C++', 'SLD2'],
        resources: [
            'https://wiki.libsdl.org/SDL2/FrontPage',
            'https://github.com/mxgmn/WaveFunctionCollapse',
            'https://www.youtube.com/watch?v=rI_y2GAlQFM',
        ],
        source: 'foo',
        updated: { month: 6, year: 2025 },
    },
    {
        title: 'Jousting with Friends',
        description: 'foo',
        stack: ['C#', 'Unity', 'Blender'],
        resources: ['foo'],
        source: 'foo',
        updated: { month: 6, year: 2020 },
    },
];
*/
