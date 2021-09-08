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
    return (
        <Router>
            <Switch>
                <Route exact path="/my-codepen" component={ Homepage }/>
                <Route path={"/:userId/pen/:penId"} component={ Pen }/>
                <Route path={"/:userId/full/:penId"} component={ FullPen }/>
                <Route path={"/search/pens?"} component={ Searcher } />
            </Switch>
        </Router>
    )
}
