import { useEffect, useState } from 'react';
import { lay, util } from '../components';
import { Project } from '../constants/project-info';
import compareDates from '../scripts/comapre-dates';
import axios from 'axios';

const REPOS_URL = 'http://api.github.com/users/m-bocelli/repos';

export function Projects() {
    const [projectList, setProjectList] = useState<Project[]>([]);
    const [sortType, setSortType] = useState<number>(0); // 0 -> Descending, 1 -> Ascending
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getRepos();
    }, []);

    /*
    useEffect(() => {
        sortProjects(sortType);
    }, [sortType]);
    */

    const getRepos = async () => {
        const response = await axios.get(REPOS_URL, {
            params: { sort: 'pushed' },
        });
        setLoading(false);
        constructProjectList(response.data);
    };

    const sortProjects = (_sortType: number) => {
        const projectListDeepCopy = [
            ...projectList.map((project) => ({
                ...project,
                updated: { ...project.updated },
                stack: [...project.stack],
                resources: [...project.resources],
            })),
        ];
        console.log(projectList);
        setProjectList(
            projectListDeepCopy.sort((projectA, projectB) =>
                _sortType === 0
                    ? compareDates(projectB.updated, projectA.updated)
                    : compareDates(projectA.updated, projectB.updated)
            )
        );
    };

    const constructProjectList = (repos: []) => {
        setProjectList(
            repos.map(
                (repo: any): Project => ({
                    title: repo.name,
                    image: repo.name + '.png',
                    description: repo.description,
                    stack: repo.topics,
                    resources: [repo.html_url + '/blob/main/README.md'],
                    source: repo.html_url,
                    updated: {
                        month: parseInt(repo.pushed_at.slice(0, 4)),
                        year: parseInt(repo.pushed_at.slice(5, 7)),
                    },
                })
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
            <lay.FlexContainer>
                {loading ? 'loading projects...' : ProjectPanels}
            </lay.FlexContainer>
        </>
    );
}
