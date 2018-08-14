import React from 'react';
import PlayerPreview from './PlayerPreview';

export default function Profile(props) {
    const { info } = props;
    return (
        <PlayerPreview username={info.login} avatar={info.avatar_url}>
            <ul className="space-list-items">
                {info.name && <li>{info.name}</li>}
                {info.location && <li>{info.location}</li>}
                {info.company && <li>{info.company}</li>}
                <li>Followers: {info.followers}</li>
                <li>Following: {info.following}</li>
                <li>Public Repos: {info.public_repos}</li>
            </ul>
        </PlayerPreview>
    )
}