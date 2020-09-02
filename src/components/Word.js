import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  text-transform: uppercase;
`;
const StyledWord = styled.div`
  background: #53555d;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  font-size: 4rem;
  opacity: 0.9;
  height: 130px;
  width: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Word = ({ word, correctLetters }) => {
  return (
    <StyledContainer>
      {word.split('').map((letter, i) => {
        return (
          <StyledWord className="word" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </StyledWord>
        );
      })}
    </StyledContainer>
  );
};

export default Word;
