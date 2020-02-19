import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    score: PropTypes.integer,


}



const Jumbotron = ({
    score
}) =>(
    <div className="jumbotron">
        <h1>Don't Click The Same Photo Twice</h1>
        <p>Score:{score}</p>
    </div>






)

Jumbotron.propTypes = propTypes;
export default Jumbotron;