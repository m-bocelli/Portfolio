import axios from 'axios';

export async function testApi() {
    const USERNAME = 'm-bocelli';
    const URL = `http://api.github.com/users/${USERNAME}/`;

    const getRepos = async () => {
        const response = await axios.get(URL + 'repos', {
            params: { sort: 'pushed' },
        });
        return response.data;
    };

    const totalCommits = (repos: any) => {
        repos.forEach(async (repo: any) => {
            const response = await axios.get(URL + repo.name);
            const commits = response.data;
            let totalCom = 0;
            commits.map((commit: any) =>
                commit.author.login === USERNAME ? totalCom++ : 0
            );
        });
    };

    const repos = getRepos();
    const commits = totalCommits(repos);
    console.log(commits);
}
