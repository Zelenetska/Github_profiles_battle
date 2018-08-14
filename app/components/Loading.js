import React, { Component } from 'react';

export default class Loading extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }
    render() {
        const styles = {
            content: {
                textAlign: 'center'
            }
        };

        return(
            <p style={styles.content}>{this.state.text}</p>
        )
    }
}

Loading.defaultProps = {
    text: 'Loading...'
};