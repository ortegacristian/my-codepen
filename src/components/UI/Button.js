import React from 'react';

export const Button = (props) => {
    return (
        <button className={`module-button ${props.className}`}>
            {props.children}
            {props.text} 
        </button>
    )
}
