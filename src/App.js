import React, { useState, useEffect} from "react";
import axios from 'axios';
import {URL, KEY} from './constants'
import "./App.css";
import {} from 'datejs'
import Photo from './components/Photo'
import Header from './components/Header'
import Title from './components/Title'
function App() {
  const [photoData, setPhotoData] = useState({}); 
  const [date, setDate] = useState(Date.today());

//Date Changing functions..
//I could put two in with the buttons
//and The other in the Title
//But I think I'd rather keep the logic together here
  const nextDate = () => {
    //don't advance dates into the future
    if (!date.equals(Date.today()))
      setDate(Date.parse(date.addDays(1)))}
  const prevDate = () => {
    setDate(Date.parse(date.addDays(-1)))}
  const specificDate = (e) => {
    setDate(Date.parse(e.target.value));
  }

  useEffect( () => {
    axios
      .get(`${URL}/planetary/apod?api_key=${KEY}&date=${date.toString('yyyy-MM-dd')}`)
        .then(res => setPhotoData(res.data))
        .catch(e => console.log('ERROR:' + e))
  }, [date])

if (!photoData.url) {
  return <div className='spinner'>--+--</div>
}
  
  return (
    <div className="App">
      <Header />
      <Title title={photoData.title} date={photoData.date} specificDate={specificDate} />
      <Photo photoData={photoData} prevDate={prevDate} nextDate={nextDate} date={date} />
    </div>
  );
}

export default App;
