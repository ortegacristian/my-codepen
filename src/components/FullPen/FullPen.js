import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router';

//Hooks
import useBodyClass from '../../hooks/useBodyClass';

//Selectors
import { getPenById } from '../../selectors/getPenById';

export const FullPen = () => {

    const { penId } = useParams();
    const pen = getPenById(penId);

    useEffect(() => {

        if(!pen) {
            return <Redirect to='/' />;
        }

        const { js } = pen;

        // eslint-disable-next-line
        const executeScript = new Function(js);
        executeScript();

    }, [pen] );

    const { html, css } = pen;

    const component = `<style>${css}</style>${html}`;

    useBodyClass(`page-full-pen`);
    return (
        <div dangerouslySetInnerHTML={{ __html: component }} />
    )
}
