/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'

const inputStyle = {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 400,
    color: 'rgb(73, 73, 73)',
    display: 'block',
    backgroundColor: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
    height: 40,
    minWidth: 280,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(123, 133, 143)',
    borderImage: 'initial',
    borderRadius: 4,
    transition: 'box-shadow 0.2s ease 0s, border-color 0.2s ease 0s',
    padding: 8,
    margin: 0,
    ':focus': {
        boxShadow: 'rgb(8, 117, 225) 0px 0px 0px 1px inset',
        borderColor: 'rgb(8, 117, 225)',
        outline: 'none'
    }
}

const labelStyle = {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 500,
    color: 'rgb(73, 73, 73)',
    display: 'block',
    marginBottom: 4,
    padding: 0,
}
const helperText = {
    width: '100%',
    fontSize: 13,
    margin: '8px 0px 0px'
}

const boldStyle = {
    fontWeight: 'bold',
}

export const Input = ({label, ...props}) => {
    return (
        <div>
            <label for={label} css={labelStyle} required="">{label}<abbr title="required">*</abbr></label>
            <input id={label} css={inputStyle} {...props}/>
            {/*<p css={helperText}><span css={boldStyle}>Error: </span>Helpful text goes here</p>*/}
        </div>
    )
}
