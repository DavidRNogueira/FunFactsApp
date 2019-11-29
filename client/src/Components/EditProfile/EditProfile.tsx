import React,{FC} from "react";
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

const EditProfile:FC = ():JSX.Element =>{
    return(
        <EditProfileDiv>
            <EditProfileHeader>Edit My Profile</EditProfileHeader>

            <EditProfileImage type="image" alt="Your Profile Image"/>

            <InputDiv>
                <StyledLabel>First Name:</StyledLabel>
                <StyledInput type="text"/>
            </InputDiv>

            <InputDiv>
                <StyledLabel>Last Name:</StyledLabel>
                <StyledInput type="text"/>
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