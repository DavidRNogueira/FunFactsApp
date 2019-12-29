import React,{FC} from "react";
import { 
        SettingsDiv,
        SettingsHeader,
        SettingsHr,
        SettingsOption,
        SettingsOptionDescription,
        StyledLink
    } from "./SettingsStyles";

const Settings:FC = ():JSX.Element =>{
    return(
        <SettingsDiv>
            <SettingsHeader>Settings</SettingsHeader>

            <StyledLink to ="/dashboard/edit-profile">
            <SettingsOption>Edit My Profile</SettingsOption>
            <SettingsOptionDescription>Edit your profile details.</SettingsOptionDescription>
            </StyledLink>

            <SettingsHr/>
            
            <StyledLink to ="/dashboard/suggest-fact">
            <SettingsOption>Suggest a Fact</SettingsOption>
            <SettingsOptionDescription>Do you have facts that you would like to add to FunFacts! on our 'Explore FunFacts!' page? Suggest them here!</SettingsOptionDescription>
            </StyledLink>
            

            <SettingsHr/>

            <StyledLink to ="/dashboard/report-bug">
            <SettingsOption>Report a bug</SettingsOption>
            <SettingsOptionDescription>Help us keep FunFacts! great and working well!</SettingsOptionDescription>
            </StyledLink>


             <SettingsHr/>

            <StyledLink to ="/dashboard">
            <SettingsOption>Privacy Settings</SettingsOption>
            <SettingsOptionDescription>Manage your account privacy settings.</SettingsOptionDescription>
            </StyledLink>

            <SettingsHr/>

            
        </SettingsDiv>
    )
}

export default Settings