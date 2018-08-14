import React from 'react';

export default class ReactElemets extends React.Component{
    render() {
        const { user } = this.props;
        return (
            <div>
                <div>Country: {user.country}</div>

            </div>
        )
    }
}





