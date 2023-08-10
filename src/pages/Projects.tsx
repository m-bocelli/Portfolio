import { useEffect, useState } from 'react';
import { lay, util } from '../components';
import { PROJECTS, Project } from '../constants/project-info';
import compareDates from '../scripts/comapre-dates';
import axios from 'axios';

export function Projects() {
    const [projectList, setProjectList] = useState<Project[]>(PROJECTS);
    const [sortType, setSortType] = useState<number>(0); // 0 -> Descending, 1 -> Ascending
    const [loading, setLoading] = useState<boolean>(true);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        sortProjects(sortType);
    }, [sortType]);

    useEffect(() => {
        getRepos();
    }, []);

    const getRepos = () => {
        setLoading(true);
        axios({
            method: 'get',
            url: 'http://api.github.com/users/m-bocelli/repos',
        }).then((response) => {
            setLoading(false);
            setRepos(response.data);
        });
    };

    const sortProjects = (_sortType: number) => {
        console.log('ran');
        const projectListDeepCopy = [
            ...projectList.map((project) => ({
                ...project,
                updated: { ...project.updated },
                stack: [...project.stack],
                resources: [...project.resources],
            })),
        ];

        setProjectList(
            projectListDeepCopy.sort((projectA, projectB) =>
                _sortType === 0
                    ? compareDates(projectB.updated, projectA.updated)
                    : compareDates(projectA.updated, projectB.updated)
            )
        );
    };

    const ProjectPanels = projectList.map((project) => (
        <util.ProjectPanel
            project={project}
            key={project.title}
        ></util.ProjectPanel>
    ));

    return (
        <>
            <div>
                {repos.map((repo: any) => (
                    <div key={repo.id}>{repo.html_url}</div>
                ))}
            </div>
            <util.SortMenu setSortType={setSortType}></util.SortMenu>
            <lay.FlexContainer>{ProjectPanels}</lay.FlexContainer>
        </>
    );
}
