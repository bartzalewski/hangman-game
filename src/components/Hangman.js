import React from 'react';
import styled from 'styled-components';
import bar from '../images/bar.svg';
import head from '../images/head.svg';
import neck from '../images/neck.svg';
import corpus from '../images/corpus.svg';
import rightArm from '../images/right-arm.svg';
import leftArm from '../images/left-arm.svg';
import rightHand from '../images/right-hand.svg';
import leftHand from '../images/left-hand.svg';
import rightLeg from '../images/right-leg.svg';
import leftLeg from '../images/left-leg.svg';
import rightFoot from '../images/right-foot.svg';
import leftFoot from '../images/left-foot.svg';

const StyledContainer = styled.div`
  margin-left: -260px;

  img {
    user-select: none;
  }

  .hangman {
    position: absolute;
  }
`;
const StyledHead = styled.img`
  margin-left: -140px;
  margin-top: 60px;
  z-index: 1;
`;
const StyledNeck = styled.img`
  margin-left: -67px;
  margin-top: 260px;
`;
const StyledCorpus = styled.img`
  margin-left: -95px;
  margin-top: 290px;
`;
const StyledRightArm = styled.img`
  margin-top: 290px;
  margin-left: -30px;
  z-index: 1;
`;
const StyledLeftArm = styled.img`
  margin-top: 290px;
  margin-left: -180px;
  z-index: 1;
`;
const StyledRightHand = styled.img`
  margin-top: 390px;
  margin-left: 75px;
`;
const StyledLeftHand = styled.img`
  margin-top: 390px;
  margin-left: -190px;
`;
const StyledRightLeg = styled.img`
  margin-top: 430px;
  margin-left: -40px;
  z-index: 1;
`;
const StyledLeftLeg = styled.img`
  margin-top: 430px;
  margin-left: -125px;
  z-index: 1;
`;
const StyledRightFoot = styled.img`
  margin-top: 590px;
`;
const StyledLeftFoot = styled.img`
  margin-top: 590px;
  margin-left: -165px;
`;

export default function Hangman({ wrongLetters }) {
  const errors = wrongLetters.length;

  return (
    <StyledContainer>
      <img src={bar} alt="bar" />
      {errors > 0 && <StyledHead className="hangman" src={head} alt="head" />}
      {errors > 1 && <StyledNeck className="hangman" src={neck} alt="neck" />}
      {errors > 2 && (
        <StyledCorpus className="hangman" src={corpus} alt="corpus" />
      )}
      {errors > 3 && (
        <StyledRightArm className="hangman" src={rightArm} alt="right arm" />
      )}
      {errors > 4 && (
        <StyledLeftArm className="hangman" src={leftArm} alt="left arm" />
      )}
      {errors > 5 && (
        <StyledRightHand className="hangman" src={rightHand} alt="right hand" />
      )}
      {errors > 6 && (
        <StyledLeftHand className="hangman" src={leftHand} alt="left hand" />
      )}
      {errors > 7 && (
        <StyledRightLeg className="hangman" src={rightLeg} alt="right leg" />
      )}
      {errors > 8 && (
        <StyledLeftLeg className="hangman" src={leftLeg} alt="left leg" />
      )}
      {errors > 9 && (
        <StyledRightFoot className="hangman" src={rightFoot} alt="right foot" />
      )}
      {errors > 10 && (
        <StyledLeftFoot className="hangman" src={leftFoot} alt="left foot" />
      )}
    </StyledContainer>
  );
}
