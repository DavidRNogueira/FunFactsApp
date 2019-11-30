import styled from "styled-components";
import { GLOBAL_BLUE } from "../../Shared/styled-vars";

export const SuggestFactDiv = styled.div `
display:flex;
flex-direction:column;
width:50%;
margin:auto;
`

export const SuggestFactHeader = styled.h1 `
font-size:3em;
text-align:center;
`

export const TextAreaLabel = styled.label `
font-size: 1.5em;
`

export const TextArea = styled.input `
width:100%;
height:10em;
`

export const SubmitButton = styled.button `
padding: 0.5em 1em 0.5em 1em;
background-color: ${GLOBAL_BLUE};
color: white;
font-size: 1em;
width:20%;
margin:1em;
align-self:center;
`

export const SuggestFactParagraph = styled.p `
font-size:1.25em;
`
export const AddSourceBtn = styled.button `
background-color:grey;
width:5em;
`

export const AddSourceInput = styled.input `
width:80%;
`

export const AddSourceDiv = styled.div `
display:flex;
flex-direction:row;
justify-content:space-evenly;
`
export const ListedSourceDiv = styled.div `
display:flex;
flex-direction:row;
`

export const ListedSourceButton = styled.button `
margin-left:1em;
border-radius:3px;
`

export const DuplicateError = styled.h3 `
font-size:1em;
color:red;
`