import React,{FC} from "react"
import { 
    OptionsDiv,
    Options,
 } from "./DashboardOptionsStyles"
import { Link } from "react-router-dom"

const DashboardOptions:FC = ():JSX.Element =>{

    

    return(
        <OptionsDiv>
            <Options><Link to ="/dashboard/fact">Explore Fun Facts!</Link></Options>
            <Options><Link to="/">Your Friends' Activity</Link></Options>
            <Options><Link to="/">Manage Friends</Link></Options>
            <Options><Link to="/">Settings</Link></Options>   
        </OptionsDiv>
    )
}

export default DashboardOptions