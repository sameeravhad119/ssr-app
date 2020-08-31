import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

// dynamic import with loadable
const Home = loadable(() => import('./pages/home'));
const About = loadable(() => import('./pages/about'));

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/'}>
                    <Home />
                </Route>
                <Route path={'/about'}>
                    <About />
                </Route>
            </Switch>
        )
    }
}
export default Main;