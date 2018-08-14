import axios from 'axios';

const id = 'YOUR_CLIENT_ID',
    sec = 'YOUR_SECRET_ID',
    params = '?client_id=' + id + '&client_secret=' + sec;

function getProfile(username) {
    return axios.get('https://api.github.com/users/' + username + params)
        .then(user => user.data);
}

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
}

function getStarCount(repos) {
    return repos.data.reduce((count, repo) => {
        return count + repo.stargazers_count;
    }, 0);
}

function calculateScore(profile, repos) {
    const followers = profile.followers,
        totalStars = getStarCount(repos);
    return followers + totalStars;
}

function getUserData(player) {
    return axios.all([
        getProfile(player),
        getRepos(player),
    ]).then((data => {
        const profile = data[0],
            repos = data[1];

        return {
            profile: profile,
            repos: calculateScore(profile, repos)
        }
    }))
}

function sortPlayers(players) {
    return players.sort(function (a, b) {
        return b.repos - a.repos;
    });
}

function handleError(error) {
    console.log(error)
}

const fetchPopularRepos = language => {
    const encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');
    return axios.get(encodeURI)
        .then(response =>  response.data.items)
        .catch(handleError)
};

const battle = players => {
    return axios.all(players.map(getUserData))
            .then(sortPlayers)
            .catch(handleError)
};

export const api = {
    fetchPopularRepos: fetchPopularRepos,
    battle: battle
};
