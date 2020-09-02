import React, { useEffect, useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
const Hangman = lazy(() => import('./components/Hangman'));
const WrongLetters = lazy(() => import('./components/WrongLetters'));
const Word = lazy(() => import('./components/Word'));
const Popup = lazy(() => import('./components/Popup'));
const PopupMobile = lazy(() => import('./components/PopupMobile'));
const Triangle = lazy(() => import('./components/Triangle'));

const StyledBox = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0);
  max-width: 1600px;
  width: 95%;
  height: 95%;
  max-height: 900px;
  position: relative;
  overflow: hidden;
`;
const StyledContainer = styled.div`
  padding: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledLeft = styled.div`
  width: 50%;
`;
const StyledRight = styled.div`
  width: 50%;
`;
const StyledMissed = styled.span`
  font-size: 2rem;
`;
const StyledFlex = styled.div`
  display: flex;
`;
const StyledBottom = styled.div`
  z-index: 1;
`;
const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
const StyledLoadingMessage = styled.h1`
  font-size: 4rem;
  color: #fff;
`;

const renderLoader = () => {
  return (
    <StyledLoader>
      <StyledLoadingMessage>Loading...</StyledLoadingMessage>
    </StyledLoader>
  );
};

export default function App() {
  const [play, setPlay] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [word, setWord] = useState('');

  const fetchWords = () =>
    fetch(
      'https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMax=12',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_API,
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setWord(data.word.split(' ')[0].split('-')[0]);
      })
      .catch((err) => {
        console.log(err);
        console.log(process.env.REACT_APP_API);
      });

  useEffect(() => {
    fetchWords();
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (play && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (word.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            return null;
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            return null;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, play, word]);

  const playAgain = () => {
    setPlay(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    fetchWords();
  };

  return (
    <Suspense fallback={renderLoader()}>
      <StyledBox>
        <StyledContainer>
          <StyledFlex>
            <StyledLeft>
              <Hangman wrongLetters={wrongLetters} />
            </StyledLeft>
            <StyledRight>
              <StyledMissed>YOU MISSED:</StyledMissed>
              <WrongLetters wrongLetters={wrongLetters} />
            </StyledRight>
          </StyledFlex>
          <StyledBottom>
            <Word word={word} correctLetters={correctLetters} />
          </StyledBottom>
          <Triangle />
        </StyledContainer>
      </StyledBox>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        word={word}
        setPlay={setPlay}
        playAgain={playAgain}
      />
      <PopupMobile />
    </Suspense>
  );
}
