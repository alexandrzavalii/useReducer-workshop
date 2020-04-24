/** @jsx jsx */
import { jsx } from '@emotion/core'
import PrimaryButton from "./buttons/PrimaryButton";
import OutlineButton from "./buttons/OutlineButton";
import {actions} from './AuthForm'
import {login} from "../mockFunctions";
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
        dispatch({type: actions.PENDING})
        login().then(name=>{
            dispatch({type: actions.LOGEDIN, payload: name})
        })
    }

    const goToSignupPage = () => {
        dispatch({type: actions.SIGNUP})
    }
    return (
        <div css={loginContainerStyle}>
            <h1>Login Page</h1>
            <form onSubmit={onLoggedIn} css={loginFormStyle}>
                <input type="username" name="username"/>
                <input type="password" name="password"/>
                <PrimaryButton type="submit">Log in</PrimaryButton>
            </form>
            <OutlineButton onClick={goToSignupPage}>Sign Up</OutlineButton>
        </div>
    )
}
