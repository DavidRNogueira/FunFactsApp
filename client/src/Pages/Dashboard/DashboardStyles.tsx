import styled from "styled-components"
import {
    GLOBAL_BLUE, GLOBAL_GREEN, GLOBAL_YELLOW
} from "../../Shared/styled-vars"

export const HeaderDiv = styled.div `
display:flex;
justify-content:center;
align-items:center;
`

export const Welcome = styled.h1 `
color:${GLOBAL_BLUE}
font-size:4em;
`

export const FunFacts = styled.h1 `
color:${GLOBAL_GREEN};
background-color:${GLOBAL_YELLOW};
font-size:4em;
border-radius: 10px;
margin:0.25em;
`
export const FactOfDayDiv = styled.div `
display:flex;
width:50%;
margin:auto;
flex-direction:column;
background-color:lightgrey;
padding:0.5em;
border-radius:5px;
`

export const FactOfDayHeader = styled.h3 `
color:grey;
font-size:2em;
margin:0.25em;;
`
