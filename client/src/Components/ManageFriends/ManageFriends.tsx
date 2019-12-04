import React,{FC, useEffect, useState} from "react";
import { ManageFriendsDiv, FriendDiv, ManageFriendsHeader, FriendImg, FriendName, NoFriends } from "./ManageFriendsStyles";
import Axios from "axios";

const ManageFriends:FC = ():JSX.Element =>{

    const [profileImage, setProfileImage] = useState<string>('')
    const [friendsList, setFriendsList] = useState<string[]>([])

    useEffect(()=>{
        Axios.get('/authenticate/user-details')
        .then(response => {
            const {profileImage, friends} = response.data
            setProfileImage(profileImage);
            setFriendsList(friends)
        })
    },
    [])

    const friendListMapped = friendsList.length ? friendsList.map((friend:string)=>
    <FriendDiv key={friend}>
        <FriendImg src={profileImage}/>
        <FriendName>{friend}</FriendName>
    </FriendDiv>
    )
    :
    <NoFriends>No Friends</NoFriends>


    return(
        <>
        <ManageFriendsHeader>Manage Friends</ManageFriendsHeader>
        <ManageFriendsDiv>
            {friendListMapped}
        </ManageFriendsDiv>
        </>
    )
}

export default ManageFriends