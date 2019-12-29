import styled from 'styled-components';
import { GLOBAL_BLUE, GLOBAL_BODY_FONT } from '../../Shared/styled-vars';

export const FactDiv = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  flex-direction: column;
  font-size: 2em;
`;

export const DidYouKnow = styled.h1`
  opacity: 0.7;
  margin-left:1em;

  @media(max-width:450px){
    font-size:1.5em;
    align-self:center;
    margin:1em 0 0 0;
  }
`;

export const FactText = styled.p`
align-self:center;
font-family:${GLOBAL_BODY_FONT}
margin:1em;
`;

export const Button = styled.button`
  padding: 1em 2em 1em 2em;
  background-color: ${GLOBAL_BLUE};
  color: white;
  font-size: 1.25em;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FactTextDiv = styled.div`
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
