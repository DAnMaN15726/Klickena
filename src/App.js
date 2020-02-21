import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


import {Card} from "./components/card";
import Jumbotron from "./components/Jumbotron"
import characters from "./characters.json"

let number = -2;
const array = [];
let answer;



const arrayLinks = () => (

  characters.map((info, index) => {
    return(
        array.push(info.image)
      
    )



  })
);
arrayLinks()

export const scor = () => {
  number+=1
  
  if( number === 0 ){
    answer = "GOOD LUCK!"
  }
  else if(number === 10){
    answer = "WOMBOOOO COMBOOOO!"
  }
  
  else{
    answer = "CORRECT!"
  }
  
  return number;
}












const App = () => (
  
  
  <div className = "container-fluid">
    <Jumbotron
      score = {scor()}
      correct = {answer}
    />


    <div className = "row">
      
      
      {array.map((info, index) => {
        return(
          <Card
            key = {info}
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



export const reInit = () => {
  
  number = -2
  
  ReactDOM.render(App(), document.getElementById('root'));





}










  
export default App;
