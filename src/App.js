import React from 'react';

import './App.css';

import Card from "./components/card";
import Jumbotron from "./components/Jumbotron"
import characters from "./characters.json"

const App = () => (
  <div className = "container">
    <Jumbotron
      score = {0}
    />



    {characters.map((info, index) => {
      return(
        <Card
          photo = {info.image}
        />
    )
    })}
   




  </div>
  


);
  
export default App;
