import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: none;
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: #394060;
  top: 0;
  left: 0;
  z-index: 20;
`;
const StyledPopupMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledMessage = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  user-select: none;
  text-align: center;
`;

const PopupMobile = () => {
  return (
    <StyledContainer className="popup-mobile">
      <StyledPopupMobile>
        <StyledMessage>
          You need a device with a bigger screen to be able to play this game!
        </StyledMessage>
      </StyledPopupMobile>
    </StyledContainer>
  );
};

export default PopupMobile;
