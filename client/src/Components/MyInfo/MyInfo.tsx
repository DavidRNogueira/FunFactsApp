import React, {FC} from "react"
import { MyPhoto, MyInfoDiv, MyName } from "./MyInfoStyles"

const MyInfo:FC = ():JSX.Element =>{
    return(
        <MyInfoDiv>
            <MyPhoto type="image"/>
            <MyName>Username</MyName>
        </MyInfoDiv>
        
    )
}

export default MyInfo