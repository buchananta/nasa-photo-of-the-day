import React, { useState } from 'react';
import {LeftButton, RightButton} from './buttons';

function Photo({photoData, prevDate, nextDate, date}) {
  const [hd, setHd] = useState(false);


  //remove the UI and just show a big image!  
  const goHd = (e) => {
    setHd(!hd);
  }
  if (hd) {
    return <img src={photoData.hdurl} alt={photoData.title} onClick={goHd} />
  }



  return (
    <section className='photo-body'>
      <div className='photo-container'>
        <LeftButton prevDate={prevDate} />
        <img src={photoData.url} alt={photoData.title} onClick={goHd} />
        {
        !date.equals(Date.today()) &&
        <RightButton nextDate={nextDate} />
        }
      </div>
      <p>{photoData.explanation}</p>
    </section>
  )
}

export default Photo;