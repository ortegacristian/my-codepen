import React from 'react';
import { useParams } from 'react-router';
import { getPenById } from '../../../selectors/getPenById';
import { PenHeaderActions } from './PenHeaderActions/PenHeaderActions';
import { PenHeaderLogo } from './PenHeaderLogo/PenHeaderLogo';
import { PenHeaderTitle } from './PenHeaderTitle/PenHeaderTitle';

export const PenHeader = () => {

    const { penId } = useParams();
    const pen = getPenById(penId);

    const { name } = pen;

    return (
        <header className="pen-main-header">
            <div className="header-wrap">
                <PenHeaderLogo />
                <PenHeaderTitle title={name}/>
                <PenHeaderActions />
            </div>
        </header>
    )
}
