import React, {FC} from "react";
import HomeNavBar from "../../Components/HomeNavBar/HomeNavBar"
import LoginForm from "../../Components/LoginForm/LoginForm"
import {
    PageDiv
} from "./HomeStyles"

const Home:FC = ():JSX.Element => {
    return(
        <div data-testid="home-div">
            <HomeNavBar data-testid="home-navbar"/>

            <PageDiv>
                <LoginForm data-testid="form"/>
            </PageDiv>
            
        </div>
    )
}

export default Home