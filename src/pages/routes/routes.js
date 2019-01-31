import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import NotFound from '../components/NotFound'
// import Home from '../components/Home';

export default () => {
    return (
        <Switch>
            <Route path='/login' exact render={(props) => <div>Login</div>}/>
            <Route path='/' exact render={(props) => <div>Slash</div>}/>
            <Route path='/home' exact render={(props) => <div>Home</div>}/>
            <Route path='*' render={(props) => <div>Not found</div>}/>
        </Switch>
    );
}