import React,{FC, useEffect, useState} from "react";
import { 
    EditProfileDiv,
    EditProfileHeader,
    InputDiv,
    StyledInput,
    StyledLabel,
    EditProfileImage,
    StyledButton,
    ButtonDiv,
    FileInput
 } from "./EditProfileStyles";
import Axios from "axios";

const EditProfile:FC = ():JSX.Element =>{

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [profileImage, setProfileImage] = useState<string>('')


    useEffect(()=>{
        Axios.get('/authenticate/user-details')
        .then(response =>{ 
            console.log(response)
            const {firstName,lastName,profileImage} = response.data
            setFirstName(firstName);
            setLastName(lastName)
            setProfileImage(profileImage)
        })    
    },
    [])

    
      const handleSave = (e:any) =>{
        console.log('Clicked')
        const payload = {
            firstName: firstName,
            lastName: lastName,
            profileImage:profileImage,
        }

        Axios.post("/authenticate/register", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
        })
            .then(res => {
            if (res.status === 200) {
                console.log('Success!')
                return res;
            }
            })
            .then(data => {
            console.log(data);
            });
      }
       

    const handleChange = (e:any) =>{
        let reader = new FileReader();
        reader.readAsDataURL(e.currentTarget.files[0]);
        reader.onloadend = () => {
            setProfileImage(reader.result as string)
        }
    }

    return(
        <EditProfileDiv>
            <EditProfileHeader>Edit My Profile</EditProfileHeader>

            <EditProfileImage src={profileImage} alt="Your Profile Image" />
            <FileInput onChange={(e:React.FormEvent<HTMLInputElement>) => handleChange(e)} type="file" accept="image/*" capture/>

            <InputDiv>
                <StyledLabel>First Name:</StyledLabel>
                <StyledInput onChange={(e:React.FormEvent<HTMLInputElement>) =>setFirstName(e.currentTarget.value)} defaultValue={firstName} type="text"/>
            </InputDiv>

            <InputDiv>
                <StyledLabel>Last Name:</StyledLabel>
                <StyledInput onChange={(e:React.FormEvent<HTMLInputElement>) =>setLastName(e.currentTarget.value)} defaultValue={lastName} type="text"/>
            </InputDiv>

            <InputDiv>
                <StyledLabel>Username:</StyledLabel>
                <StyledInput type="text"/>
            </InputDiv>
            
            <ButtonDiv>
                <StyledButton>Cancel</StyledButton>
                <StyledButton onClick={handleSave}>Save</StyledButton>
            </ButtonDiv>
        </EditProfileDiv>

    )
}

export default EditProfile