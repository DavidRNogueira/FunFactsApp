import styled from "styled-components";
import {
    GLOBAL_GREEN,
    GLOBAL_YELLOW,
    GLOBAL_BLUE
} from "../../Shared/styled-vars"

export const Logo:any = styled.h1 `
color:${GLOBAL_GREEN};
margin:0;
margin-left:1em;
font-size:4em;
`

export const NavBarDiv:any=styled.div `
background-color:${GLOBAL_YELLOW};
display:flex;
justify-content:space-around;

border-bottom: 5px solid ${GLOBAL_GREEN};
`

export const NavBarLink:any= styled.a `
color:${GLOBAL_GREEN};
font-size: 1.5em;
margin:.5em;
font-style:italic;


&:hover{
    color:${GLOBAL_BLUE};
}
`
export const LinksDiv: any= styled.div `
display:flex;
align-items:center;
`
