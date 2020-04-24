/** @jsx jsx */
import { jsx } from '@emotion/core'
import PrimaryButton from "./buttons/PrimaryButton";
import OutlineButton from "./buttons/OutlineButton";
import {actions} from './AuthForm'
import {login} from "../mockFunctions";
import {Input} from "./inputs/Input";

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

export const Login = ({dispatch}) => {
    const onLoggedIn = (e) => {
        e.preventDefault()
        console.log("e",e.target.username.value)
        login().then(name=>{})
    }

    const goToSignupPage = () => {}
    return (
        <div css={loginContainerStyle}>
            <h1>Login Page</h1>
            <form onSubmit={onLoggedIn} css={loginFormStyle}>
                <Input type="username" name="username" label="username"/>
                <Input type="password" name="password" label="password"/>
                <PrimaryButton type="submit">Log in</PrimaryButton>
            </form>
            <OutlineButton onClick={goToSignupPage}>Sign Up</OutlineButton>
        </div>
    )
}
