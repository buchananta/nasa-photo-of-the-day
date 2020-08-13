import React, { useState } from 'react';
import {LeftButton, RightButton} from './buttons';
import styled from 'styled-components';

const photoContainer = styled.div`
  width: {document.querySelector('.photo-container img').clientWidth}
`


function Photo({photoData, prevDate, nextDate}) {
  const [hd, setHd] = useState(false);
  const [hidden, setHidden] = useState(true);

  //remove the UI and just show a big image!  
  const goHd = (e) => {
    setHd(!hd);
  }
  if (hd) {
    return <img src={photoData.hdurl} alt={photoData.title} onClick={goHd} />
  }
  console.log(photoData.url);
  const YoutubeFrame = () => {
    return (
      <iframe width={window.innerWidth * .8} height={window.innerWidth * .45} resize='both' src={photoData.url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen={true}
        onload='resizeIframe(this)'
        title='video'
      />
    )
  }
  return (
    <section className='photo-body'>
           {/*check if iframe exists, if it does, disable carousel buttons*/}
           {/*Because otherwise it triggers a render the iframe each enter/exit*/}
      <div className='photo-container'
           onMouseEnter={() => !document.querySelector('iframe') && setHidden(false)}
           onMouseLeave={() => setHidden(true)}
           > 
        <LeftButton hidden={hidden} prevDate={prevDate} />
        {photoData.url.includes('youtube') ? <YoutubeFrame /> :
        <img src={photoData.url}
             alt={photoData.title}
             onClick={goHd}
        />}
        <RightButton hidden={hidden} nextDate={nextDate} />
      </div>
      <p>{photoData.explanation}</p>
    </section>
  )
}

export default Photo;