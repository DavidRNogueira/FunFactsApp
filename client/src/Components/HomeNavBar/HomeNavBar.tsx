import React,{FC} from "react";
import {
    Logo,
    NavBarDiv,
    NavBarLink,
    LinksDiv
} from "./HomeNavBarStyles"


const NavBar:FC = (): JSX.Element =>{

    return(
        <NavBarDiv>
        <Logo>FunFacts!</Logo>
        
            <LinksDiv>
                <NavBarLink>Create Account</NavBarLink>
                <NavBarLink>Get Help</NavBarLink>
            </LinksDiv>
       
        </NavBarDiv>
        
    )

}

export default NavBar