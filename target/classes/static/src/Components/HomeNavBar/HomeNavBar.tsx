import React,{FC} from "react";
import {
    Logo,
    NavBarDiv,
    NavBarLink,
    LinksDiv
} from "./HomeNavBarStyles"


const NavBar:FC = (): JSX.Element =>{

    return(
        <NavBarDiv data-testid="navbar">
        <Logo data-testid="name-header">FunFacts!</Logo>
        
            <LinksDiv>
                <NavBarLink data-testid="create-account">Create Account</NavBarLink>
                <NavBarLink data-testid="get-help">Get Help</NavBarLink>
            </LinksDiv>
       
        </NavBarDiv>
        
    )

}

export default NavBar