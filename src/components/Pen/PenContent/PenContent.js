import React from 'react'
import { useParams } from 'react-router';
import { getPenById } from '../../../selectors/getPenById';
import { BoxEditor } from './BoxEditor/BoxEditor'

export const PenContent = () => {

    const { penId } = useParams();
    const pen = getPenById(penId);

    const { html, css, js } = pen;

    return (
        <div className='page-wrap'>
            <div className='boxes'>
                <div className='boxes-editor'>
                    <BoxEditor type={"html"} value={html} mode="html"/>
                    <BoxEditor type={"css"} value={css} mode="css"/>
                    <BoxEditor type={"js"} value={js} mode="javascript"/>
                </div>
                <div className='resizer'></div>
                <div className='output-container'>
                    <div className='output-sizer'>
                        <div className='result'>
                            <iframe src={`#/cristianortega/full/${penId}`} className='result-iframe' title='pen-content'></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
