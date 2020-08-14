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
    text-align: right;
    color: #FC3D21;
    height: 1.5em;
    width: 10em;
    border: none;
  }
  h2 {
    padding-top: 0;
    margin-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
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