import React, {FC} from "react"
import { 
    DidYouKnow,
    FactText,
    Button,
    FactDiv,
    ButtonDiv,
    FactTextDiv
 } from "./FactStyles"

const Fact:FC = ():JSX.Element =>{
    return(
        <div>
        <FactDiv>
            <DidYouKnow>Did you know?</DidYouKnow>

            <FactTextDiv>
                <FactText>Fact Loading...</FactText>
            </FactTextDiv>

        </FactDiv>

        <ButtonDiv>
            <Button>Share</Button> 
            <Button>Next</Button>
        </ButtonDiv>
        
        </div>
        
    )
}

export default Fact