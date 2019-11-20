import React, { FC } from 'react';
import { DidYouKnow, FactText, Button, FactDiv, ButtonDiv, FactTextDiv } from './FactStyles';

const Fact: FC = (): JSX.Element => {
  return (
    <>
      <FactDiv>
        <DidYouKnow>Did you know?</DidYouKnow>
        <FactTextDiv>
          <FactText data-testid="loading-text">Fact Loading...</FactText>
        </FactTextDiv>
      </FactDiv>
      <ButtonDiv data-testid="button-wrap">
        <Button data-testid="share-btn">Share</Button>
        <Button data-testid="next-btn">Next</Button>
      </ButtonDiv>
    </>
  );
};

export default Fact;
