import React from 'react'
import { getBoxIcon } from '../../../../selectors/getBoxIcon';
import { BoxResizer } from './BoxResizer/BoxResizer';

import AceEditor from "react-ace";
import 'ace-builds/webpack-resolver';

export const BoxEditor = ({type, value, mode}) => {

    function onChange(newValue) {
        console.log("change", newValue);
    }

    return (
        <>
            <BoxResizer type={type} />
            <div className={`box box-${type}`}>
                <div className='powers'>
                    <div className='powers-drag-handle'></div>
                    <div className='editor-actions-left'>
                        <h2 className={`box-title ${type}-editor-title`}>
                            {getBoxIcon(type)}
                            <span className='box-title-name'> {type.toUpperCase()} </span>
                            <span className='box-title-preprocessor-name'></span>
                        </h2>
                    </div>
                </div>
                <AceEditor className='code-wrap' height='' width='' fontSize='' name={`${type}_editor`} mode={mode} theme="monokai"
                    onChange={onChange}
                    value={value}
                    highlightActiveLine={true}
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        printMargin: false
                    }}
                />
            </div>
        </>
    )
}
