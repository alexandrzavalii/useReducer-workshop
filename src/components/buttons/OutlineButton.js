/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import {arrayOf, bool, func, node, oneOfType} from "prop-types";

const buttonStyle = css`
                    border: none;
                    box-shadow: none;
                    background: none;
          cursor: pointer;
            color: #0070f3;
            font-size: 16px;
            font-weight: 400;
             height: 2.5rem;
             line-height: 2.5rem;
            margin-left: 16px;
             border-radius: 7px;
             background: transparent;
             padding: 0px 24px;
            }
            :hover {
                color: #0070f3;
                background: rgba(0,118,255,0.1);
            }
            :disabled {
                      opacity: 0.4;
                     }
`
const OutlineButton = ({onClick, disabled, children}) => (
        <button disabled={disabled} onClick={onClick} type="button" css={buttonStyle}>
            {children}
        </button>
)

OutlineButton.propTypes = {
    children: oneOfType([
        arrayOf(node),
        node
    ]).isRequired,
    onClick: func.isRequired,
    disabled: bool
}

export default OutlineButton;
