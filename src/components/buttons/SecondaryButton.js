/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import {arrayOf, bool, func,node, oneOfType} from "prop-types";

const buttonStyle = css`
                    border: none;
                    box-shadow: none;
                    background: none;
                    cursor: pointer;
                    font-size: 16px;
                    color: white;
                    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 14px 0px;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    margin: 0px;
                    border-radius: 7px;
                    background: rgb(37, 37, 37);
                    padding: 0px 2rem;
                    opacity: 1;
                    transition: background 0.2s ease 0s, color 0.2s ease 0s, box-shadow 0.2s ease 0s, opacity 0.2s ease 0s,;
                    }
                    :hover {
                            box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
                            background: rgba(37, 37, 37, 0.9);
                    }
`
const SecondaryButton = ({onClick, disabled, children}) => (
    <button disabled={disabled} onClick={onClick} type="button" css={buttonStyle}>{children}</button>
)
SecondaryButton.propTypes = {
    children: oneOfType([
        arrayOf(node),
        node
    ]).isRequired,
    onClick: func.isRequired,
    disabled: bool
}
export default SecondaryButton;
