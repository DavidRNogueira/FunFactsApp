import React,{FC} from "react"
import MyInfo from "../../Components/MyInfo/MyInfo"
import { ActivityDiv } from "./ActivityStyles"

const Activity:FC = ():JSX.Element =>{
    return(
        <ActivityDiv>
        <MyInfo/>
        </ActivityDiv>
    )
}

export default Activity