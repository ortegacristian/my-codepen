import React from 'react'

//Componentes
import { Searcher } from './Searcher/Searcher';
import { Grid } from './Grid/Grid';
import { Topics } from './Topics/Topics';
import { AboutMe } from './AboutMe/AboutMe';
import { Footer } from './Footer/Footer';

//Styles 
import './Homepage.css';

// Hooks
import useBodyClass from '../../hooks/useBodyClass';

export const Homepage = () => {
    useBodyClass(`page-homepage`);
    return (
        <>
            <Searcher />
            <Grid />
            <Topics />
            <AboutMe />
            <Footer />
        </>
    )
}
