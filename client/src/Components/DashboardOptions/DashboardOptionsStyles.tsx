import styled from "styled-components"
import { 
    GLOBAL_GREEN,
    GLOBAL_BLUE
} from "../../Shared/styled-vars"

export const OptionsDiv = styled.div `
background-color:${GLOBAL_GREEN};
padding:1em;
display:flex;
flex-direction:row;
justify-content:space-around;


`

export const Options = styled.a `
color:${GLOBAL_GREEN};
font-size:1.75em;

&:hover{
    font-size:1.8em;

}
`

export const StyledHr = styled.hr `
margin:1em;
width:80%;
color:${GLOBAL_BLUE}
border:1px solid ${GLOBAL_BLUE};
opacity:0.6;
`