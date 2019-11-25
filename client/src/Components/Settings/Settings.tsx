import React,{FC} from "react";
import { SettingsDiv, SettingsHeader, SettingsHr, SettingsOption, SettingsOptionDescription } from "./SettingsStyles";

const Settings:FC = ():JSX.Element =>{
    return(
        <SettingsDiv>
            <SettingsHeader>Settings</SettingsHeader>

            <SettingsOption>My Profile</SettingsOption>
            <SettingsOptionDescription>Edit your profile details.</SettingsOptionDescription>

            <SettingsHr/>

            <SettingsOption>Privacy Settings</SettingsOption>
            <SettingsOptionDescription>Manage your account privacy settings.</SettingsOptionDescription>

            <SettingsHr/>

            <SettingsOption>Report a bug</SettingsOption>
            <SettingsOptionDescription>Help us keep FunFacts! great and working well!</SettingsOptionDescription>

            <SettingsHr/>

            
        </SettingsDiv>
    )
}

export default Settings