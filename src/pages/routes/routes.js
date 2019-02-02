import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../components/Home';

export default () => {
    return (
        <Switch>
            <Route path='/' exact render={(props) => <Home {...props}/>} />
            <Route path='/home' exact render={(props) => <Home {...props} />}/>
            <Route path='*' render={(props) => <div>Sorry, this page does not Exist</div>}/>
        </Switch>
    );
}