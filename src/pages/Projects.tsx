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
    //const [sortType, setSortType] = useState<number>(0); // 0 -> Descending, 1 -> Ascending
    const [placeHolder, setPlaceHolder] = useState<PlaceHolderText>(
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
                console.log(error);
                setPlaceHolder('failed to fetch projects');
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

    const ProjectPanels = repos
        ? repos.map((repo: Repo) => (
              <util.ProjectPanel
                  project={{
                      title: repo.name,
                      image: 'logo.png',
                      description: repo.description,
                      stack: repo.topics,
                      source: repo.html_url,
                      updated: {
                          month: parseInt(repo.pushed_at.slice(0, 4)),
                          year: parseInt(repo.pushed_at.slice(5, 7)),
                      },
                  }}
                  key={repo.name}
              ></util.ProjectPanel>
          ))
        : null;

    return (
        <>
            <lay.FlexContainer>
                {loading ? placeHolder : ProjectPanels}
            </lay.FlexContainer>
        </>
    );
}
