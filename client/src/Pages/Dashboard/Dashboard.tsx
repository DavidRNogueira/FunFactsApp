import React, {FC} from "react";
import DashboardOptions from "../../Components/DashboardOptions/DashboardOptions";
import {Route,Router} from "react-router-dom";
import {history} from "../../App"
import Fact from "../../Components/Fact/Fact"
import { LogoDiv, Logo } from "./DashboardStyles";



const Dashboard:FC = ():JSX.Element =>{

    return(
        <div>
         <LogoDiv>
             <Logo>FunFacts!</Logo>
        </LogoDiv>   
        <DashboardOptions/>
        <Router history={history}>
            <Route path ="/dashboard/fact" component={Fact}/>   
        </Router>
        </div>
        
    )
}

export default Dashboard

/*
import Activity from "../../Components/Activity/Activity"
import ManageFriends from "../../Components/ManageFriends/ManageFriends"
import Settings from "../../Components/Settings/Settings"
<Route path ="/activity" component = {Activity}/>
<Route path = "/manage" component = {ManageFriends}/>
<Route path = "/settings" component = {Settings}/>
             */