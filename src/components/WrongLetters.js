import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 10px;
  text-transform: uppercase;
  text-align: center;
  margin-left: -10px;
`;
const StyledWrongLetter = styled.div`
  color: #4d71fa;
  border-radius: 10px;
  font-size: 4rem;
`;

const WrongLetters = ({ wrongLetters }) => {
  return (
    <StyledContainer className="wrong-container">
      {wrongLetters
        .map((letter, i) => (
          <StyledWrongLetter className="wrong-letter" key={i}>
            {letter}
          </StyledWrongLetter>
        ))
        .reduce(
          (prev, curr) => (prev === null ? [curr] : [prev, ' ', curr]),
          null
        )}
    </StyledContainer>
  );
};

export default WrongLetters;
