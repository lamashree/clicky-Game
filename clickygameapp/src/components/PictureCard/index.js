import React from "react";
 import "./Images.css";
const PictureCard = props => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.Images1} />
      </div>
      </div>
  )
}
export default PictureCard;
