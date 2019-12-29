import styled from "styled-components";
import { GLOBAL_BLUE } from "../../Shared/styled-vars";

export const ReportBugDiv = styled.div `
display:flex;
flex-direction:column;
width:50%;
margin:auto;
padding-bottom:3em;

`

export const ReportBugHeader = styled.h1 `
font-size:3em;
text-align:center;
`

export const TextAreaLabel = styled.label `
font-size: 1.5em;
`

export const TextArea = styled.textarea `
width:100%;
font-size:12pt;
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

export const ReportBugParagraph = styled.p `
font-size:1.25em;
`