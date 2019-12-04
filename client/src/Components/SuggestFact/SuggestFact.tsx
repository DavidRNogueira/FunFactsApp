import React,{FC, useState} from "react"
import { SuggestFactHeader, SuggestFactDiv, TextArea, TextAreaLabel, SubmitButton, SuggestFactParagraph, AddSourceBtn, AddSourceDiv, AddSourceInput, ListedSourceDiv, ListedSourceButton, DuplicateError, ListItem } from "./SuggestFactStyles"

const SuggestFact:FC = (): JSX.Element =>{

const [input, setInput] = useState<string>('')
const [sources, setNewSources] = useState<string[]>([]);
const [isDuplicate, setIsDuplicate] = useState<boolean>(false)

const sourcesMapped:any = sources ? sources.map((source:string) =>
    <ListedSourceDiv key ={source}>
        <ListItem >{source}</ListItem>
        <ListedSourceButton onClick={(e:any) => handleDelete(source)}>X</ListedSourceButton>
    </ListedSourceDiv> 
    )
:
"Please add sources"

const handleClick = (e:any) =>{
    if(sources.includes(input)){
        return setIsDuplicate(true)
    }
    setIsDuplicate(false)
    setNewSources(() => [...sources,input])
    setInput('')    
}

const handleChange = (e:any) =>{
    setInput(e.target.value);
}

const handleDelete = (e:string) =>{
    let newSourcesList = sources.filter(source => e !== source)
    setNewSources(newSourcesList)
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
            <TextArea></TextArea>

            <TextAreaLabel>Sources</TextAreaLabel>

            <ul>
              {sourcesMapped}  
            </ul>           

            <AddSourceDiv>
            <AddSourceInput value={input} type='text' onChange={handleChange}/>
            <AddSourceBtn onClick={(e:any) => handleClick(e)}>Add</AddSourceBtn>
            </AddSourceDiv>

            {isDuplicate && <DuplicateError>Your have already added that source.</DuplicateError>}
            
           

            <SubmitButton>Submit</SubmitButton>
        </SuggestFactDiv>
    )
}

export default SuggestFact