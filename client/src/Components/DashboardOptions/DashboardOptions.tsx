import React,{FC} from "react"
import { 
    OptionsDiv,
    Options,
 } from "./DashboardOptionsStyles"

const DashboardOptions:FC = ():JSX.Element =>{

    

    return(
        <OptionsDiv>
            <Options href="/dashboard/fact">Explore Fun Facts!</Options>
            <Options href="/dashboard/activity">Your Friends' Activity</Options>
            <Options>Manage Friends</Options>
            <Options>Settings</Options>   
        </OptionsDiv>
    )
}

export default DashboardOptions