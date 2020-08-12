import axios from 'axios';
import React, { useState, useEffect } from 'react';

//Lets use datejs, because javascript has _terrible_ builtin stuff
import datejs from 'datejs';
import Title from './Title';
import {URL, KEY} from '../constants'

function Photo(props) {
  const [photoData, setPhotoData] = useState(props); 
  const [date, setDate] = useState(Date.today());

  useEffect( () => {
    axios
      .get(`${URL}/planetary/apod?api_key=${KEY}&date=${date.toString('yyyy-MM-dd')}`)
        .then(res => setPhotoData(res.data))
        .catch(e => console.log('ERROR:' + e))
  }, [date])


  const nextDate = () => {
    setDate(Date.parse(date.addDays(1)))}
  const prevDate = () => {
    setDate(Date.parse(date.addDays(-1)))}


  return (
    <figure>
      <figcaption>
        <Title title={photoData.title} date={photoData.date} />
      </figcaption>
      <div className='photo-container'>
        <button className='left-button' onClick={prevDate}>{'<'}</button>
        <img src={photoData.url} alt={photoData.title} />
        {
        !date.equals(Date.today()) &&
        <button className='right-button' onClick={nextDate}>{'>'}</button>
        }
      </div>
      <p>{photoData.explanation}</p>
    </figure>
  )
}


export default Photo;