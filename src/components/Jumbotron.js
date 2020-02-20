import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    score: PropTypes.integer,
    correct: PropTypes.string


}



const Jumbotron = ({
    score,
    correct
}) =>(
    <div className="jumbotron">
        <h1>Don't Click The Same Photo Twice</h1>
        <p>Score: {score}        : {correct}</p> 
    </div>






)

Jumbotron.propTypes = propTypes;
export default Jumbotron;