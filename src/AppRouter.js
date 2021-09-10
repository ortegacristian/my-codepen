import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'; 

import { Homepage } from './components/Homepage/Homepage';
import { Pen } from './components/Pen/Pen';
import { FullPen } from './components/FullPen/FullPen';
import { Searcher } from './components/Search/Searcher';

export const AppRouter = ({match}) => {

    let basename = document.location.pathname;

    return (
        <Router basename={basename}>
            <Switch>
                <Route path={`${basename}/:userId/pen/:penId`} component={ Pen }/>
                <Route path={`${basename}/:userId/full/:penId`} component={ FullPen }/>
                <Route path={`${basename}/search/pens?`} component={ Searcher } />
                <Route exact path={basename} component={ Homepage }/>
            </Switch>
        </Router>
    )
}
