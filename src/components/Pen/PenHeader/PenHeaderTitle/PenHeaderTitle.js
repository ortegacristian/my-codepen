import React from 'react'

export const PenHeaderTitle = (props) => {
    return (
        <div className="pen-title-wrapper">
            <div className="pen-title-text">
                <h1 className="pen-title">
                    <a href="/cristianortega/pen/1" className="pen-title-link" title={`${props.name}`}>{props.name}</a>
                </h1>
                <div className="pen-title-owner">
                    <a className="pen-title-owner-link" href="/cristianortega">Cristian Ortega</a>
                </div>
            </div>
        </div>
    )
}
