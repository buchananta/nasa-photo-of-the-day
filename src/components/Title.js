import React from 'react';
import styled from 'styled-components';

function Title(props) {
  const { title, date, specificDate } = props;



  return (
    <div>
      <h2>{title}</h2>
      <input type="date" value={date.toString('yyyy-MM-dd')} onChange={specificDate} />
    </div>
  )
}


export default Title;