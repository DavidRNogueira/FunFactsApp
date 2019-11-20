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

&:hover{
    font-size:1.8em;
}

@media (max-width: 900px){
    font-size:1em;
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
justify-content:center;
`

export const Logo = styled.h1 `
color:${GLOBAL_GREEN};
font-size:3em;
margin:0;
`