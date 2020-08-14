import React, { useState } from 'react';
import {LeftButton, RightButton} from './buttons';
import styled from 'styled-components';

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
  width: 90%;
  max-height: 100vh;
  max-width: 100vw;
  margin: auto;
  img {
    object-fit: scale-down:
    flex: 1 1;
    border-bottom: solid #0B3D91 .3em;
    padding-bottom: 1em;
  }
`
const Explanation = styled.p`
  outline: solid #FC3D21 .1em;
  border-bottom: solid #0B3D91 .3em;
  padding: 1em 1.7em; 
  width: 40%;
  min-width: 300px;
  margin: 1em auto;
  font-size: 1.3em;
  font-weight: 500;
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
      <PhotoContainer
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
      </PhotoContainer>
      <Explanation>{photoData.explanation}</Explanation>
    </section>
  )
}

export default Photo;