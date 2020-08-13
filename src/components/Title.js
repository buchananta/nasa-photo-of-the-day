import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.div`
  display: flex;
  margin: auto;
  max-width: 80%;
  justify-content: space-between;
  align-items: flex-end;
  color: #FC3D21;
  font-size: 2vw;
  input {
    font-size: 1em;
    font-weight: 600;
    color: #FC3D21;
    height: 1.5em;
    border: none;
  }
`
function Title(props) {
  const { title, date, specificDate } = props;

  return (
    <StyledTitle>
      <h2>{title}</h2>
      <input type="date" value={date.toString('yyyy-MM-dd')} onChange={specificDate} />
    </StyledTitle>
  )
}


export default Title;