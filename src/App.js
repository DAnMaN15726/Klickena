import React from 'react';

import './App.css';

import Card from "./components/card";
import Jumbotron from "./components/Jumbotron"
import characters from "./characters.json"



const App = () => (
  <div className = "container-fluid">
    <Jumbotron
      score = {0}
    />


    <div className = "row">
      {characters.map((info, index) => {
        return(
          <Card
            photo = {info.image}
          />
      )
      })}
   </div>




  </div>
  


);

function randomize = (characters) => (
  characters.sort( () => Math.random() - 0.5) );
);





  
export default App;
