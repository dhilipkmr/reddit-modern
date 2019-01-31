import React, {Component} from 'react';
import { Route } from 'react-router';
import Routes from './pages/routes/routes';

export default class App extends Component {
    render() {
        return (
            <Routes/>
        );
    }
}