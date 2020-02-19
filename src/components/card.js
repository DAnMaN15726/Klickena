import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    photo: PropTypes.string
}

const Card = ({
    photo
}) => (
    <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={photo} alt="Card image cap"></img>
        <div className="card-body">

        </div>
    </div>



    


);









export default Card;