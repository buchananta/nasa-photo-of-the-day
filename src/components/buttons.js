import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: rgba(50,50,50,.50);;
  color: white;
  padding: 1em;
  border: none;
  width: 150px;

  ${({hidden}) => hidden && 'display: none'};

`
const BtnLeft = styled(StyledBtn)`
  transform: translate(100%);
`
const BtnRight = styled(StyledBtn)`
  transform: translate(-100%);
`


function LeftButton({prevDate, hidden}) {
  return <BtnLeft hidden={hidden} onClick={prevDate}>{'<'}</BtnLeft>
}

function RightButton({nextDate, hidden}) {
  return <BtnRight hidden={hidden}
                   onClick={nextDate}
                   >{'>'}</BtnRight>
}

export {LeftButton, RightButton}