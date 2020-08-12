import React, {useState} from 'react';

function Title(props) {
  const { title, date } = props;


  return (
    <>
      <h2>{title}</h2>
      <time dateTime={date}>{date}</time>
    </>
  )
}


export default Title;