import React from "react";
import "./App.css";
import Photo from './components/Photo'

function App() {
  //I think I will have a header component, but inside the app function, just to make it cleaner
  //and then everything else can go into the Photo Component
  //and all the API calls and everything can sit in there, keeping this clean.
  //I will probably put title/date and explanation components inside there as well
  //finally, I'd like to have buttons for next/previous dates!
  //clicking the image should open up the HD image in a new window.. but that's easy.
  const Header = () => {
    return (
      <header>
        <img src='https://api.nasa.gov/assets/img/favicons/favicon-192.png' alt='NASA logo' />
        <h1>NASA Photo of the Day</h1>
      </header>
    )
  }


  return (
    <div className="App">
      <Header />
      <Photo />
    </div>
  );
}

export default App;
