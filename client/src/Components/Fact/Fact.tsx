import React, { FC, useState } from 'react';
import { DidYouKnow, FactText, Button, FactDiv, ButtonDiv, FactTextDiv } from './FactStyles';
import axios from "axios"

const Fact: FC = (): JSX.Element => {

  const [fact,factUpdated] = useState("Click Next to get started!")

  const handleNext = () =>{
    axios.get("/random-fact")
    .then(response => factUpdated(response.data.text))
  }

  return (
    <>
      <FactDiv>
        <DidYouKnow>Did you know?</DidYouKnow>
        <FactTextDiv>
          <FactText data-testid="loading-text">{fact}</FactText>
        </FactTextDiv>
      </FactDiv>
      <ButtonDiv data-testid="button-wrap">
        <Button data-testid="share-btn">Share</Button>
        <Button data-testid="next-btn" onClick={handleNext}>Next</Button>
      </ButtonDiv>
    </>
  );
};

export default Fact;
