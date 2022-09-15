/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Card = (props) => {
 
  return (
    <div class="card">
      <img class="card-img-top p-2" src={props.imgLink} alt="Card image cap"style={{ width: "auto", height: "25rem" }} />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Card;
