import React,{FC, useEffect, useState} from "react";
import { 
    EditProfileDiv,
    EditProfileHeader,
    InputDiv,
    StyledInput,
    StyledLabel,
    EditProfileImage,
    StyledButton,
    ButtonDiv
 } from "./EditProfileStyles";
import Axios from "axios";

const EditProfile:FC = ():JSX.Element =>{

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [profileImage, setProfileImage] = useState('')


    useEffect(()=>{
        Axios.get('/authenticate/user-details')
        .then(response =>{ 
            const {firstName,lastName,profileImage} = response.data
            setFirstName(firstName);
            setLastName(lastName)
            setProfileImage(profileImage)
        })    
    })
    
    return(
        <EditProfileDiv>
            <EditProfileHeader>Edit My Profile</EditProfileHeader>

            <EditProfileImage src={profileImage} type="image" alt="Your Profile Image"/>

            <InputDiv>
                <StyledLabel>First Name:</StyledLabel>
                <StyledInput defaultValue={firstName} type="text"/>
            </InputDiv>

            <InputDiv>
                <StyledLabel>Last Name:</StyledLabel>
                <StyledInput defaultValue={lastName} type="text"/>
            </InputDiv>

            <InputDiv>
                <StyledLabel>Username:</StyledLabel>
                <StyledInput type="text"/>
            </InputDiv>
            
            <ButtonDiv>
                <StyledButton>Cancel</StyledButton>
                <StyledButton>Save</StyledButton>
            </ButtonDiv>
        </EditProfileDiv>

    )
}

export default EditProfile