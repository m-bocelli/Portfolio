import { useEffect, useState } from 'react';
import { lay, util } from '../components';
//import compareDates from '../scripts/comapre-dates';
import axios from 'axios';

const REPOS_URL = 'http://api.github.com/users/m-bocelli/repos';

export type Repo = {
    name: string;
    description: string;
    topics: string[];
    html_url: string;
    pushed_at: string;
};

type PlaceHolderText = 'loading projects...' | 'failed to fetch projects';

export function Projects() {
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
              repo.name !== 'tasks' ? (
                  <util.ProjectPanel
                      key={repo.html_url}
                      project={{
                          title: repo.name,
                          image: repo.name + '.png',
                          description: repo.description,
                          stack: repo.topics,
                          source: repo.html_url,
                          updated: {
                              month: parseInt(repo.pushed_at.slice(0, 4)),
                              year: parseInt(repo.pushed_at.slice(5, 7)),
                          },
                      }}
                  ></util.ProjectPanel>
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

    return (
        <>
            <lay.FlexContainer>
                {loading ? placeHolderText : content}
            </lay.FlexContainer>
        </>
    );
}
