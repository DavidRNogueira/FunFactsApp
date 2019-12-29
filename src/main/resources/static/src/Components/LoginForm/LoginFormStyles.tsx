import styled from "styled-components"
import {
    GLOBAL_GREEN,
    GLOBAL_YELLOW,
    GLOBAL_BLUE,
    GLOBAL_BODY_FONT
} from "../../Shared/styled-vars"

export const LoginDiv = styled.div `
background-color:${GLOBAL_YELLOW};
border: 3px solid ${GLOBAL_GREEN};
width:20%;

display:flex;
align-items:center;
flex-direction:column;
margin-top:2em;
`

export const LoginHeader = styled.h1 `
font-size:3em;
color:${GLOBAL_GREEN};
`

export const Form = styled.form `
display:flex;
flex-direction:column;
align-items:center;

`

export const TextInput = styled.input `
width:100%;
`

export const LoginButton = styled.button `
background-color:${GLOBAL_BLUE};
padding:0.5em;
margin:1em 0 2em 0;
border: 1px solid white;
color:white;
font-family:${GLOBAL_BODY_FONT};
font-size:1em;
`

export const FormLabels = styled.label `
font-size:1.5em;
`