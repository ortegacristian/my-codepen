import React from 'react'
import { getBoxIcon } from '../../../../../selectors/getBoxIcon';

export const BoxResizer = ({type}) => {

    return (
        <div className={`editor-resizer ${type}-editor-resizer`}>
            <h2 className={`box-title ${type}-editor-title box-title--resizer`}>
                {getBoxIcon(type)}
                <span className='box-title-name'> {type.toUpperCase()} </span>
                <span className='box-title-preprocessor-name'></span>
            </h2>
        </div>
    )
}
