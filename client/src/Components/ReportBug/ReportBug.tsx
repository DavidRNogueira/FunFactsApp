import React,{FC} from "react"
import { ReportBugHeader, ReportBugDiv, TextArea, TextAreaLabel, SubmitButton, ReportBugParagraph } from "./ReportBugStyles"

const ReportBug:FC = (): JSX.Element =>{
    return(
        <ReportBugDiv>
            <ReportBugHeader>Report A Bug</ReportBugHeader>
            <ReportBugParagraph>
                FunFacts! relies on your feedback to keep it going. We would appreciate it if you could take your time to describe exactly what problem you ran into. Mention things like:
                <ul>
                    <li>What page was it?</li>
                    <li>What triggered it?</li>
                    <li>Did it interrupt your FunFacts! experience?</li>
                    <li>Does it happen often?</li>
                </ul>
            </ReportBugParagraph>
            <TextAreaLabel>Describe the problem:</TextAreaLabel>
            <TextArea type="text"/>
            <SubmitButton>Submit</SubmitButton>
        </ReportBugDiv>
    )
}

export default ReportBug