import React from "react";
import Card from "./Card";
import avenger from "./../img/Avenger.jpg";
import titanic from "./../img/Titanic.jpg";
import jurassic from "./../img/jurassic park.jpg";

const CardGroup = (props) => {
  return (
    <div class="card-group">
      <Card imgLink={props.name[0]} />
      <Card imgLink={props.name[1]}/>
      <Card imgLink={props.name[2]} />
    </div>
  );
};

export default CardGroup;
