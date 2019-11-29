import React,{FC} from "react"
import { 
    OptionsDiv,
    Options,
    LogoDiv,
    Logo,
 } from "./DashboardOptionsStyles"
import { Link } from "react-router-dom"
 
const DashboardOptions:FC = ():JSX.Element =>{
    return(
        <div>
        <LogoDiv>
            <Link to="/dashboard">
            <Logo>FunFacts!</Logo>
            </Link>
             
        </LogoDiv>  
        <OptionsDiv>
            <Options to= "/dashboard/fact">Explore Fun Facts!</Options>
            <Options to="/dashboard/activity">Your Friends' Activity</Options>
            <Options to ="/dashboard/manage-friends">Manage Friends</Options>
            <Options to ="/dashboard/settings">Settings</Options>   
        </OptionsDiv>
    
        </div>
    )
}

export default DashboardOptions