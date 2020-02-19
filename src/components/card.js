import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    photo: PropTypes.string
}

const Card = ({
    photo
}) => (
    
    <div className="col-2 card" style={{width: "18rem"}} onClick={handle}>
        <img className="card-img-top" src={photo} alt="Card image cap"></img>
        <div className="card-body">

        </div>
    </div>
    


    


);


const handle = () => (
    console.log("Button clicked")


);






export default Card;