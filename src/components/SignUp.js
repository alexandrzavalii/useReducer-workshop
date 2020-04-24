/** @jsx jsx */
import { jsx } from '@emotion/core'
import PrimaryButton from "./buttons/PrimaryButton";
import OutlineButton from "./buttons/OutlineButton";
import {actions} from './AuthForm'
import {createUser} from "../mockFunctions";
const loginContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center'
}

const loginFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

export const SignUp = ({dispatch}) => {
    const onUserCreate = (e) => {
        e.preventDefault()

        // call createUser with username
    }
    return (
        <div css={loginContainerStyle}>
            <h1>Create New Account</h1>
            <form onSubmit={onUserCreate} css={loginFormStyle}>
                <input type="username" name="username"/>
                <input type="password" name="password"/>
                <PrimaryButton type="submit">Log in</PrimaryButton>
            </form>
            <OutlineButton onClick={()=>null}>Sign Up</OutlineButton>
        </div>
    )
}
