import React,{FC, useEffect, useState, FormEvent} from "react";
import { ManageFriendsDiv, ManageFriendsHeader, FriendImg, FriendName, NoFriends, AddFriendDiv, AddFriendInput, FriendSearchDiv } from "./ManageFriendsStyles";
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
    <FriendSearchDiv key={friend}>
        <FriendImg src={profileImage}/>
        <FriendName>{friend}</FriendName>
    </FriendSearchDiv>
    )
    :
    <NoFriends>No Friends</NoFriends>


    const handleAddFriend = (e:FormEvent<HTMLInputElement>) =>{
        console.log(e.currentTarget.value)
    }


    return(
        <>
        <ManageFriendsHeader>Manage Friends</ManageFriendsHeader>
        <AddFriendDiv>
            <h3>Add Friend</h3>
        <AddFriendInput onChange={handleAddFriend} type='text'/>
            
        </AddFriendDiv>

        <ManageFriendsDiv>
            {friendListMapped}
        </ManageFriendsDiv>
        </>
    )
}

export default ManageFriends