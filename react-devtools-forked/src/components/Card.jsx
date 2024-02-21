import React from "react";
import Avartar from "./Avartar";
import Para from "./Para";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avartar img={props.img} />
      </div>
      <div className="bottom">
        <Para detail={props.tel} />
        <Para detail={props.email} />
      </div>
    </div>
  );
}

export default Card;
