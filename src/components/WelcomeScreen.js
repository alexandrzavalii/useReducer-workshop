/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import OutlineButton from "./buttons/OutlineButton";

const welcomeScreenStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}
export const WelcomeScreen = ({userName, handleLogOut}) => {
    return (
        <div css={welcomeScreenStyle}>
            <h1>Welcome {userName}</h1>
            <OutlineButton onClick={handleLogOut}>Log Out</OutlineButton>
        </div>
    )
}
