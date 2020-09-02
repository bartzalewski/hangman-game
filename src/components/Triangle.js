import React from 'react';
import styled from 'styled-components';

const StyledTriangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 450px solid #4d71fa;
  border-left: 450px solid transparent;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default function Triangle() {
  return <StyledTriangle />;
}
