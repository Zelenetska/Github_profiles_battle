import React from 'react';
import { api } from '../utils/api';
import RepoGrid from './RepoGrid';
import SelectedLanguage from './SelectedLanguage';
import Loading from './Loading';

export default class Popular extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All',
            repos: null
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState({ selectedLanguage: lang, repos: null })

        api.fetchPopularRepos(lang)
            .then(function (repos) {
                this.setState({repos: repos})
            }.bind(this))
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    render() {
        const { selectedLanguage, repos } = this.state;

        return (
            <div className="container">
                <SelectedLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {!repos ?
                    <Loading /> :
                    <RepoGrid repos={repos} />}
            </div>
        )
    }
}