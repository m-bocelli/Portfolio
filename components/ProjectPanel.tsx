import { Project } from '../constants/types';
import { useEffect } from 'react';
import { observeOnScroll } from '../scripts/observe-on-scroll';

export default function ProjectPanel({
    project,
}: {
    project: Project;
}): JSX.Element {
    useEffect(() => {
        observeOnScroll();
    }, []);
    const techStack = project.stack.map((techItem: string, index: number) => (
        <li key={index}>{techItem}</li>
    ));

    return (
        <div className='project-panel__container' scroll-anim='true'>
            <h3 className='project-panel__title'>
                {project.title.toUpperCase()}
            </h3>
            <div className='project-panel__image-containter'>
                <img className='project-panel__image' src={project.image}></img>
            </div>
            <p>
                <a
                    className='project-panel__source-link'
                    href={project.source}
                    target='_blank'
                >
                    {'<'}
                    <span className='project-panel__source-link__space'> </span>
                    {'>'}
                </a>
                Updated {project.updated.month}. {project.updated.year}
            </p>
            <p>{project.description}</p>
            <p>Tech</p>
            <ul className='project-panel__tech-stack'>{techStack}</ul>
        </div>
    );
}
