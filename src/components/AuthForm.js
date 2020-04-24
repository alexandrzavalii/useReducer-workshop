import React, {useReducer} from 'react';
import { Login } from "./Login";
import {Loading} from "./Loading";
import {WelcomeScreen} from "./WelcomeScreen";
import {SignUp} from "./SignUp";

export const actions = {
    PENDING: "PENDING",
    LOGIN: "LOGIN",
    LOGEDOUT: "LOGEDOUT",
    SIGNUP: "SIGNUP",
    LOGEDIN: "LOGEDIN",
}

const initialState = {
    isLoading: false,
}


function authReducer(state, action) {
    switch (action.type) {
        case actions.PENDING: {
            return {isLoading: true}
        }
        case actions.LOGEDIN: {
            return {isLoading: false, userName: action.payload.user}
        }
        case actions.LOGEDOUT: {
            return {isLoading: false, userName: undefined}
        }
        case actions.SIGNUP: {
            return {screen: 'signup'}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const AuthForm = () => {
    const [state,dispatch] = useReducer(authReducer,initialState)
    if(state.isLoading) return <Loading/>
    if(state.userName) return <WelcomeScreen userName={state.userName} handleLogOut={()=>dispatch({type: actions.LOGEDOUT})}/>

    if(state.screen === 'signup') return <SignUp dispatch={dispatch}/>
    return <Login dispatch={dispatch}/>
}
