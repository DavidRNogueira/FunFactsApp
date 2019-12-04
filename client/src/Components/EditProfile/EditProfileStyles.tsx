import styled from "styled-components"
import { GLOBAL_BLUE } from "../../Shared/styled-vars"

export const EditProfileDiv = styled.div `
display:flex;
flex-direction:column;
width:70%;
margin:auto;
`

export const EditProfileHeader = styled.h1 `
font-size:3em;
text-align:center;
`
export const InputDiv = styled.div `
display:flex;
flex-direction:column;
margin:1em auto;
width:50%;
`

export const StyledLabel = styled.label `
font-size:1.5em;
`
export const StyledInput = styled.input `
width:100%
`

export const EditProfileImage = styled.img `
width:10em;
margin: auto;
`
export const FileInput = styled.input `
color:${GLOBAL_BLUE};
align-self:center;
width:10em;
`

export const StyledButton = styled.button `
padding: 0.5em 1em 0.5em 1em;
background-color: ${GLOBAL_BLUE};
color: white;
font-size: 1em;
`
export const ButtonDiv = styled.div `
display: flex;
margin-top:2em;
justify-content: space-evenly;
`