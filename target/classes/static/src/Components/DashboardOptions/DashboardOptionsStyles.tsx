import styled from "styled-components"
import { 
    GLOBAL_GREEN,
    GLOBAL_BLUE,
    GLOBAL_YELLOW
} from "../../Shared/styled-vars"
import {Link} from "react-router-dom"

export const LogoDiv = styled.div `
background-color:${GLOBAL_YELLOW};
border-bottom: 10px solid ${GLOBAL_GREEN}
display:flex;
justify-content:space-between;
align-items:center;
`

export const Logo = styled.h1 `
color:${GLOBAL_GREEN};
font-size:3em;
margin:0.2em 0 0.2em 1em;
`
export const NotificationsButton = styled.button `
margin-right:1em;
font-size:2em;
background-color:${GLOBAL_YELLOW};
border:0;
color:${GLOBAL_BLUE};
padding:0.2em;
border-radius:20px;

:hover{
    background-color:yellow;
}
`
export const Notifications = styled.div `
background-color:#f8f8f8;
border:1px solid black
position:absolute;
right:0;
z-index:1;
width:35%
`

export const NoNotifications = styled.h1 `
color:grey;
text-align:center
`

export const LogoLink = styled(Link) `
display:flex;
justify-content:space-between;
align-items:center;
`

export const Icons = styled(Link) `
margin-right:1em;
font-size:2em;
background-color:${GLOBAL_YELLOW};
border:0;
color:${GLOBAL_BLUE};
padding:0.2em;
border-radius:20px;

:hover{
    background-color:yellow;
}
`