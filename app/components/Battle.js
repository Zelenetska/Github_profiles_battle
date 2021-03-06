import React, {Component} from 'react';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import { Link } from 'react-router-dom';

export default class Battle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(id, username) {
        this.setState(function () {
            const newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size200';
            return newState;
        })
    }

    handleReset(id) {
        this.setState(function () {
            const newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null;
            return newState;
        })
    }

    render() {
        const {playerOneName, playerTwoName, playerOneImage, playerTwoImage} = this.state,
            {match} = this.props;
        return (

            <div className='column_input'>
                <div className="row">
                    {!playerOneName &&
                    <PlayerInput
                        id='playerOne'
                        label='Player One'
                        onSubmit={this.handleSubmit}
                    />
                    }
                    {playerOneImage !== null &&
                    <PlayerPreview
                        avatar={playerOneImage}
                        username={playerOneName}>
                        <button
                            className='reset'
                            onClick={this.handleReset.bind(this, 'playerOne')}>
                            Reset
                        </button>
                    </PlayerPreview>}

                    {!playerTwoName &&
                    <PlayerInput
                        id='playerTwo'
                        label='Player Two'
                        onSubmit={this.handleSubmit}
                    />
                    }
                    {playerTwoImage !== null &&
                    <PlayerPreview
                        avatar={playerTwoImage}
                        username={playerTwoName}>
                        <button
                            className='reset'
                            onClick={this.handleReset.bind(this, 'playerTwo')}>
                            Reset
                        </button>
                    </PlayerPreview>}
                </div>


                <div>
                    {playerOneImage && playerTwoImage &&
                    <Link className='button'
                          to={{
                              pathname: match.url + '/results',
                              search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                          }}>
                        Battle
                    </Link>
                    }
                </div>
            </div>
        )
    }
}