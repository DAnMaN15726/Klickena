import React from "react";
import PropTypes from "prop-types";
import {randomize} from '../App.js'

let choices = [];

const propTypes = {
    photo: PropTypes.string,
    name: PropTypes.strings
}

export const Card = ({
    photo,
    name
}) => (
    
    <div className="col-2 card" style={{width: "18rem"}} onClick={handle}>
        <img className="card-img-top" src={photo} alt="Card image cap"></img>
        <div className="card-body">

        </div>
    </div>
    


    


);


const handle = (event) => {
    
    event.preventDefault();
   
    


    choices.push(event.target.src)
    const temp = [];
    console.log(choices)

    for (let i = 0; i < choices.length; i++){
        let holder = choices[i];

        if (temp.indexOf(holder) !== -1){
            verdict(true);
        }
        temp.push(holder);
        
    }
    verdict(false);
    
};


export const verdict = (decision) => {
    if( decision === true){
        console.log("DUPLICATE")
        
        
    }
    else{
        randomize();
    }
    
};









