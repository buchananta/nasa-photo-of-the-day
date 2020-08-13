import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: rgba(50,50,50,.50);;
  color: white;
  padding: 1em;
  border: none;
  width: 150px;
`
const BtnLeft = styled(StyledBtn)`
  transform: translate(100%);
`
const BtnRight = styled(StyledBtn)`
  transform: translate(-100%);
`


function LeftButton({prevDate, btns}) {
  return <BtnLeft className={btns && "hidden"} onClick={prevDate}>{'<'}</BtnLeft>
}

function RightButton({nextDate, btns}) {
  return <BtnRight className={btns && "hidden"}
                   onClick={nextDate}
                   >{'>'}</BtnRight>
}

export {LeftButton, RightButton}