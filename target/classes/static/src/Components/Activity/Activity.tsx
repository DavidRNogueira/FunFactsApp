import React,{FC} from "react"
import MyInfo from "../MyInfo/MyInfo"
import { ActivityDiv, PostDiv, PostImage, PostUsername, FactText, YourFriendsActivity } from "./ActivityStyles"

const Activity:FC = ():JSX.Element =>{
    return(
        
       

        <ActivityDiv>
             <MyInfo/>
             <YourFriendsActivity>Your Friends' Activity</YourFriendsActivity>
            <PostDiv>
                <PostImage/>
                <PostUsername>David Nogueira</PostUsername>
                <FactText>Dogs can bark.</FactText>
            </PostDiv>

            <PostDiv>
                <PostImage/>
                <PostUsername>Joey</PostUsername>
                <FactText>Dolphins are smart</FactText>
            </PostDiv>
        </ActivityDiv>
       
        
    )
}

export default Activity