import React, {Component} from 'react';
import queryString from 'query-string';
import {api} from '../utils/api';
import Loading from './Loading';
import {Link} from 'react-router-dom';
import Player from './Player';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        const players = queryString.parse(this.props.location.search);
        api.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then(function (players) {
            if (players === null) {
                this.setState(function () {
                    return {
                        error: 'Looks like these was an error. Check both users exist',
                        loading: false
                    }
                });
            }
            this.setState(function () {
                return {
                    error: null,
                    loading: false,
                    winner: players[0],
                    loser: players[1]
                }
            });
        }.bind(this));
    }

    render() {
        const {error, loading, winner, loser} = this.state;

        if (loading === true) {
            return <Loading/>
        }

        if (error) {
            return (
                <div>
                    <p>{error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }
        return (
            <div className='column_input'>
                <div className="row">
                    <Player label='Winner'
                            score={winner.score}
                            profile={winner.profile}/>

                    <Player label='Loser'
                            score={loser.score}
                            profile={loser.profile}/>
                </div>

                <div>
                    <Link className='button'
                          to='/battle'>
                        New Battle
                    </Link>
                </div>
            </div>
        )
    }
}