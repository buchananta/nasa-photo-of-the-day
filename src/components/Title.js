import React, {useState} from 'react';

function Title(props) {
  const { title, date, specificDate } = props;


  return (
    <>
      <h2>{title}</h2>
      <input type="date" value={date.toString('yyyy-MM-dd')} onChange={specificDate} />
    </>
  )
}


export default Title;