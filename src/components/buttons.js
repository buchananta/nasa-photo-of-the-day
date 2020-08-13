import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: black;
  position: absolute;
  scale: 4;
  top: 70%;
`

function LeftButton({prevDate}) {
  return <StyledBtn onClick={prevDate}>{'<'}</StyledBtn>
}

function RightButton({nextDate}) {
  return <button onClick={nextDate}>{'>'}</button>
}

export {LeftButton, RightButton}