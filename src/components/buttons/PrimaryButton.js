/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import {arrayOf, bool, func,node, oneOfType} from "prop-types";

const buttonStyle = css`
                    border: none;
                    box-shadow: none;
                    background: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 400;
     box-shadow: rgba(0, 118, 255, 0.39) 0px 4px 14px 0px;
     height: 2.5rem;
     line-height: 2.5rem;
     margin-left: 16px;
     border-radius: 7px;
     background: rgb(0, 112, 243);
     padding: 0px 24px;
    }
    :active {
        background: rgb(0, 106, 230);
     }
    :hover {
        box-shadow: rgba(0, 118, 255, 0.23) 0px 6px 20px;
        background: rgba(0, 118, 255, 0.9);
    }
`
const PrimaryButton = ({onClick, disabled, children, ...props}) => (
        <button disabled={disabled} onClick={onClick} type="button" css={buttonStyle} {...props} >
            {children}
        </button>

)
PrimaryButton.propTypes = {
    children: oneOfType([
        arrayOf(node),
        node
    ]).isRequired,
    onClick: func,
    disabled: bool
}
export default PrimaryButton;
