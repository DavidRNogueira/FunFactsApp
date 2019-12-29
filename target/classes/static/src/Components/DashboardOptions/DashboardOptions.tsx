import React,{FC, useState} from "react"
import { 
    OptionsDiv,
    Options,
    LogoDiv,
    Logo,
    NoNotifications,
    Notifications,
    NotificationsButton,
    LogoLink,
 } from "./DashboardOptionsStyles"
 
const DashboardOptions:FC = ():JSX.Element =>{

    const [notifications, setNotifications] = useState<Boolean>(false)

    // Notification button to be replaced by icon
    
    return(
        <>
        <LogoDiv>
            <LogoLink to='/dashboard'>
                <Logo>FunFacts!</Logo>
            </LogoLink>
             <NotificationsButton onClick={(e:any)=>setNotifications(!notifications)}>
                 Notifications
            </NotificationsButton>
        </LogoDiv> 

        {notifications &&
        <Notifications>
                <NoNotifications>No Notifications</NoNotifications>
        </Notifications>}

        <OptionsDiv>
            <Options to= "/dashboard/fact">Explore Fun Facts!</Options>
            <Options to="/dashboard/activity">Your Friends' Activity</Options>
            <Options to ="/dashboard/manage-friends">Manage Friends</Options>
            <Options to ="/dashboard/settings">Settings</Options>   
        </OptionsDiv>
    
        </>
    )
}

export default DashboardOptions