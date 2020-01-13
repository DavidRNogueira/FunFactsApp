import styled from "styled-components"
import { Link } from "react-router-dom"

export const SettingsDiv = styled.div `
display:flex;
margin:auto;
width:50%;
flex-direction:column;
`
export const SettingsHeader = styled.h1 `
align-self:center;
font-size:3em;
`
export const SettingsHr = styled.hr `
width:100%;
color:grey;
`
export const SettingsOption = styled.h1 `
margin:0;
font-size:2em;
`
export const SettingsOptionDescription = styled.p `
color:grey;
font-size:1em;
`

export const StyledLink = styled(Link) `
color:black;
`