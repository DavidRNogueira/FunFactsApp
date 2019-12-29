import React, {FC, useState, useEffect} from "react"
import { MyPhoto, MyInfoDiv, MyName } from "./MyInfoStyles"
import Axios from "axios"

const MyInfo:FC = ():JSX.Element =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [profileImage, setProfileImage] = useState('')

    useEffect(()=>{
        Axios.get('/authenticate/user-details')
        .then(response =>{
            const {firstName, lastName, profileImage} = response.data
            setFirstName(firstName);
            setLastName(lastName)
            setProfileImage(profileImage)
        })
    })


    return(
        <MyInfoDiv>
            <MyPhoto src={profileImage} type="image"/>
    <MyName>{firstName + ' ' + lastName}</MyName>
        </MyInfoDiv>
        
    )
}

export default MyInfo