import React,{FC} from "react"
import { 
    OptionsDiv,
    Options,
    LogoDiv,
    Logo,
 } from "./DashboardOptionsStyles"
 
const DashboardOptions:FC = ():JSX.Element =>{
    return(
        <div>
        <LogoDiv>
             <Logo>FunFacts!</Logo>
        </LogoDiv>  
        <OptionsDiv>
            <Options to= "/dashboard/fact">Explore Fun Facts!</Options>
            <Options to="/dashboard/activity">Your Friends' Activity</Options>
            <h1>Manage Friends</h1>
            <h1>Settings</h1>   
        </OptionsDiv>
    
        </div>
    )
}

export default DashboardOptions