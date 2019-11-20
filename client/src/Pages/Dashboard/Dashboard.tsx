import React, {FC} from "react";
import {
    HeaderDiv,
    Welcome,
    FunFacts,
    FactOfDayDiv,
    FactOfDayHeader
} from "./DashboardStyles"

const Dashboard:FC = ():JSX.Element =>{

    return(
        <div>
        <HeaderDiv>
            <Welcome data-testid="welcome-to">Welcome to</Welcome><FunFacts data-testid="funfacts">FunFacts!</FunFacts>
        </HeaderDiv>
        <FactOfDayDiv>
            <FactOfDayHeader>Fact of the day:</FactOfDayHeader>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </FactOfDayDiv>
        </div>
        
        )
}

export default Dashboard

