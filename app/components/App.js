import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Battle from "./Battle";
import Popular from "./Popular";
import Nav from './Nav'
import Results from "./Results";

export default class App extends React.Component{


    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/battle' component={Battle}/>
                        <Route exact path='/popular' component={Popular}/>
                        <Route exact path='/battle/results' component={Results}/>
                        <Route render={() => <p>Page not found</p>}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}