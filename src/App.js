import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


import {Card, verdict} from "./components/card";
import Jumbotron from "./components/Jumbotron"
import characters from "./characters.json"

const array = [];
const arrayLinks = () => (

  characters.map((info, index) => {
    return(
        array.push(info.image)
      
    )



  })
);
arrayLinks()

const App = () => (
  
  
  <div className = "container-fluid">
    <Jumbotron
      score = {0}
    />


    <div className = "row">
      
      
      {array.map((info, index) => {
        return(
          <Card
            photo = {info}
          />
      )
      })}
   </div>




  </div>
  


);

export const randomize = () => {
  let updated;
  let temp;
  for( let i = array.length - 1; i > 0; i--){
    updated = Math.floor(Math.random() * (i + 1))
    temp = array[i];
    array[i] = array[updated];
    array[updated] = temp;

    
  }
  ReactDOM.render(App(), document.getElementById('root'));
  
};
randomize()







  
export default App;
