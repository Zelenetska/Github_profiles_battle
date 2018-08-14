import React, { Component } from 'react';

export default class PlayerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ username: value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { onSubmit, id } = this.props;
        onSubmit(id, this.state.username);
    }

    render() {
        const { username } = this.state;
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor="username">{this.props.label}</label>
                <input type="text"
                       id='username'
                       placeholder='GitHub Username'
                       value={username}
                       autoComplete='off'
                       onChange={this.handleChange}
                />
                <button className='button'
                        type='submit'
                        disabled={!username}>
                    Submit
                </button>
            </form>
        )
    }
}