import styled from "styled-components"
import { 
    GLOBAL_GREEN,
    GLOBAL_BLUE,
    GLOBAL_YELLOW
} from "../../Shared/styled-vars"
import {Link} from "react-router-dom"

export const OptionsDiv = styled.div `
background-color:${GLOBAL_GREEN};
padding:1em;
display:flex;
flex-direction:row;
justify-content:space-around;
flex-wrap:wrap;


`

export const Options = styled(Link) `
color:${GLOBAL_YELLOW};
font-size:1.75em;
text-align:center;

&:visited{
    font-size:1.75em;

}

@media (max-width: 900px){
    font-size:1.25em;
}
`

export const StyledHr = styled.hr `
margin:1em;
width:80%;
color:${GLOBAL_BLUE}
border:1px solid ${GLOBAL_BLUE};
opacity:0.6;
`
export const LogoDiv = styled.div `
background-color:${GLOBAL_YELLOW};
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
font-size:1.5em;
background-color:${GLOBAL_BLUE};
border:0;
color:white;
padding:0.2em;
border-radius:5px;

:hover{
    background-color:blue;
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