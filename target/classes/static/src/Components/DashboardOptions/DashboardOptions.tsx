import React,{FC, useState} from "react"
import { 
    LogoDiv,
    Logo,
    NoNotifications,
    Notifications,
    NotificationsButton,
    LogoLink,
    Icons,
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
                    <Icons to="/dashboard/fact">
                        <i className="fas fa-search"></i>
                    </Icons>
                    <Icons to="/dashboard/activity">
                        <i className="fas fa-user-friends"></i>
                    </Icons>
                    <Icons to="/dashboard/settings">
                        <i className="fas fa-cogs"></i>
                    </Icons>
                    <NotificationsButton onClick={(e:any)=>setNotifications(!notifications)}>
                        <i className="fas fa-bell"></i>
                    </NotificationsButton>
        </LogoDiv> 

        {notifications &&
        <Notifications>
                <NoNotifications>No Notifications</NoNotifications>
        </Notifications>}
        </>
    )
}

export default DashboardOptions