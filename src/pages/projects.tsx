import ProjectPanel from '@/components/ProjectPanel/ProjectPanel';
import FlexContainer from '@/components/FlexContainer/FlexContainer';
import { Repo } from '@/constants/types';
import { GetStaticPropsResult } from 'next';

const REPOS_URL = 'https://api.github.com/users/m-bocelli/repos?';

interface ProjectsProps {
    repos: Repo[];
}

export default function Projects({ repos }: ProjectsProps) {
    const projectPanels = repos
        ? repos.map((repo: Repo) =>
              !repo.topics.includes('school') ? (
                  <ProjectPanel key={repo.html_url} repo={repo}></ProjectPanel>
              ) : null
          )
        : null;

    const content = !repos ? (
        <div>
            <div>loading...</div>
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

    return <FlexContainer>{content}</FlexContainer>;
}

export async function getStaticProps(): Promise<
    GetStaticPropsResult<ProjectsProps>
> {
    const res = await fetch(
        REPOS_URL +
            new URLSearchParams({
                sort: 'pushed',
            })
    );
    const repos = await res.json();

    return { props: { repos } };
}
