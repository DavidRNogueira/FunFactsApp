import React,{FC, useState} from "react"
import { SuggestFactHeader, SuggestFactDiv, TextArea, TextAreaLabel, SubmitButton, SuggestFactParagraph, AddSourceBtn, AddSourceDiv, AddSourceInput } from "./SuggestFactStyles"

const SuggestFact:FC = (): JSX.Element =>{

    //Problem #1: If source is repeated, key is duplicated and error is thrown.
    //Problem #2: How to clear input at button click?

const [input, setInput] = useState('')
const [sources, setNewSources] = useState();

const sourcesMapped:any = sources ? sources.map((source:string) => 
<li key ={sources.indexOf(source)}>{source}</li>)
:
"Please add sources"

const handleClick = (e:any) =>{
        if (sources === undefined){
        return(setNewSources([input]))
    }
    setNewSources(() => [...sources,input])
    
}

const handleChange = (e:any) =>{
    setInput(e.target.value);
}
    return(
        <SuggestFactDiv>

            <SuggestFactHeader>Suggest a Fact</SuggestFactHeader>

            <SuggestFactParagraph>
                We are always interested in adding new facts! Your contribution would help us alot. Please provide the following:
            </SuggestFactParagraph>
            <ul>
                    <li>Fun fact</li>
                    <li>Sources</li>
            </ul>

            <TextAreaLabel>Fun Fact:</TextAreaLabel>
            <TextArea type="text"/>

            <TextAreaLabel>Sources</TextAreaLabel>

            <ul>
              {sourcesMapped}  
            </ul>           

            <AddSourceDiv>
            <AddSourceInput type='text' onChange={handleChange}/>
            <AddSourceBtn onClick={(e:any) => handleClick(e)}>Add</AddSourceBtn>
            </AddSourceDiv>
            
           

            <SubmitButton>Submit</SubmitButton>
        </SuggestFactDiv>
    )
}

export default SuggestFact