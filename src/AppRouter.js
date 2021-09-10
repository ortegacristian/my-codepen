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

export const AppRouter = () => {

    let basepath = "";
    let homepagePath = "/";
    
    if(document.location.pathname.includes("my-codepen")) {
        basepath = "/my-codepen";
        homepagePath = "/my-codepen";
    }

    return (
        <Router>
            <Switch>
                <Route exact path={`${homepagePath}`} component={ Homepage }/>
                <Route path={`${basepath}/:userId/pen/:penId`} component={ Pen }/>
                <Route path={`${basepath}/:userId/full/:penId`} component={ FullPen }/>
                <Route path={`${basepath}/search/pens?`} component={ Searcher } />
            </Switch>
        </Router>
    )
}
