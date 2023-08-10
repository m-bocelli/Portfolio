import '../styles/ProjectPanel.css';
import { Project } from '../../constants/project-info';

export function ProjectPanel({ project }: { project: Project }): JSX.Element {
    const techStack = project.stack.map((techItem: string, index: number) => (
        <li key={index}>{techItem}</li>
    ));
    const resourceList = project.resources.map(
        (resource: string, index: number) => <li key={index}>{resource}</li>
    );
    return (
        <div className='project-panel__container'>
            <h3 className='project-panel__title'>
                {project.title.toUpperCase()}
            </h3>
            <p>
                <a className='project-panel__source-link' href={project.source}>
                    {'<'}
                    <span className='project-panel__source-link__space'> </span>
                    {'>'}
                </a>
                Updated {project.updated.month}. {project.updated.year}
            </p>
            <p>{project.description}</p>
            <span>Tech</span>
            <ul className='project-panel__tech-stack'>{techStack}</ul>
            <ul className='project-panel__resource-list'>{resourceList}</ul>
        </div>
    );
}
