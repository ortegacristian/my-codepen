import React from 'react';
import { pens } from '../../../data/Pens/pens';
import { CodepenCard } from './CodepenCard/CodepenCard';

export const Grid = () => {
    return (
        <div className='PaginationContainer'>
            <section className='homepage-grid'>
                <div className='grid'>
                    <div>
                        <h2>Encuentra inspiración de miles de diseños.</h2>
                        <p>Explora los miles de diseños y usalos a conveniencia bajo licencia CC BY-SA 4.0.</p>
                    </div>
                    {pens.map((pen, index) => {
                        return (<CodepenCard key={`codepencard-${pen.id}`} data={pen}/>);    
                    })}
                </div>
            </section>
            <nav className='pagination'>
                <button className='pagination-button'>
                    Next
                    <img src='./assets/icons/rightArrow.svg' alt='Next' />
                </button>
            </nav>
        </div>
    );
}
