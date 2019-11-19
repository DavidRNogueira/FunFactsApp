import styled from "styled-components"
import { 
    GLOBAL_GREEN,
    GLOBAL_BLUE,
    GLOBAL_YELLOW
} from "../../Shared/styled-vars"

export const OptionsDiv = styled.div `
background-color:${GLOBAL_GREEN};
padding:1em;
display:flex;
flex-direction:row;
justify-content:space-around;
flex-wrap:wrap;


`

export const Options = styled.a `
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