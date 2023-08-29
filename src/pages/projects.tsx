import { useEffect, useState } from 'react';
//import compareDates from '../scripts/comapre-dates';
import axios from 'axios';
import ProjectPanel from '@/components/ProjectPanel/ProjectPanel';
import FlexContainer from '@/components/FlexContainer/FlexContainer';
import { Repo } from '@/constants/types';

const REPOS_URL = 'https://api.github.com/users/m-bocelli/repos';

type PlaceHolderText = 'loading projects...' | 'failed to fetch projects';

export default function Projects() {
    //const [sortType, setSortType] = uSseState<number>(0); // 0 -> Descending, 1 -> Ascending
    const [placeHolderText, setPlaceHolderText] = useState<PlaceHolderText>(
        'loading projects...'
    );
    const [loading, setLoading] = useState<boolean>(true);
    const [repos, setRepos] = useState<Repo[] | null>();

    useEffect(() => {
        getRepos();
    }, []);

    /*
    useEffect(() => {
        sortProjects(sortType);
    }, [sortType]);
    */
    const getRepos = async () => {
        await axios
            .get(REPOS_URL, { params: { sort: 'pushed' } })
            .then((response) => {
                console.log('Fetch successful');
                setLoading(false);
                setRepos(response.data);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
                setPlaceHolderText('failed to fetch projects');
            });
    };

    /*
    const sortProjects = (_sortType: number) => {
        const projectListDeepCopy = [
            ...projectList.map((project) => ({
                ...project,
                updated: { ...project.updated },
                stack: [...project.stack],
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
    */

    const projectPanels = repos
        ? repos.map((repo: Repo) =>
              repo.name !== 'tasks-s22' ? (
                  <ProjectPanel key={repo.html_url} repo={repo}></ProjectPanel>
              ) : null
          )
        : null;

    const content =
        placeHolderText === 'failed to fetch projects' ? (
            <div>
                <div>{placeHolderText}</div>
                <a
                    href='https://github.com/m-bocelli?tab=repositories'
                    target='_blank'
                    style={{ color: 'var(--text)' }}
                >
                    see GitHub
                </a>
            </div>
        ) : (
            projectPanels
        );

    return <FlexContainer>{loading ? placeHolderText : content}</FlexContainer>;
}
