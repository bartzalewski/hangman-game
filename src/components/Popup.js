import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helper';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 10;
`;
const StyledPopup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledFinalMessage = styled.h2`
  color: #fff;
  font-size: 4rem;
  margin: 1rem 0;
  font-weight: 500;
  user-select: none;
`;
const StyledButton = styled.button`
  border: 5px dashed #ffb900;
  background: none;
  padding: 20px 60px;
  border-radius: 50px;
  color: #ffb900;
  font-size: 2rem;
  font-family: 'Aller Display';
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #ffb900;
    color: #fff;
    transition: 0.3s ease-in-out;
  }
`;

const Popup = ({ correctLetters, wrongLetters, word, setPlay, playAgain }) => {
  let finalMessage = '';
  let play = true;

  if (checkWin(correctLetters, wrongLetters, word) === 'win') {
    finalMessage = 'THANK YOU FOR PLAYING';
    play = false;
  } else if (checkWin(correctLetters, wrongLetters, word) === 'lose') {
    finalMessage = 'GAME OVER';
    play = false;
  }

  useEffect(() => {
    setPlay(play);
  });

  return (
    <StyledContainer
      style={finalMessage !== '' ? { display: 'flex' } : { display: 'none' }}
    >
      <StyledPopup>
        <StyledFinalMessage>{finalMessage}</StyledFinalMessage>
        <StyledButton onClick={playAgain}>NEW WORD</StyledButton>
      </StyledPopup>
    </StyledContainer>
  );
};

export default Popup;
