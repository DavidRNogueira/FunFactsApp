import React, {FC, useState} from "react"
import { 
    DidYouKnow,
    FactText,
    Button,
    FactDiv,
    ButtonDiv,
    FactTextDiv
 } from "./FactStyles"
 import axios from "axios"


const Fact:FC = ():JSX.Element =>{
    const [data, setData] = useState("Press Next to get started!")

    window.addEventListener("keydown", (e) =>{
        if (e.key === "ArrowRight"){
            console.log("Pressed!")
        }
      })

    
 const renderFact = ():any =>{
    axios.get("/random-fact")
    .then(response => setData(response.data))
  }

    return(
        <div>
        <FactDiv>
            <DidYouKnow>Did you know?</DidYouKnow>

        <FactTextDiv>
                <FactText>{data}</FactText>
         </FactTextDiv>

        </FactDiv>

        <ButtonDiv>
            <Button>Share</Button> 
            <Button onClick={renderFact}>Next</Button>
        </ButtonDiv>
        
        </div>
        
    )
}

export default Fact