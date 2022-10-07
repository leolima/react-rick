import React from "react";
import "../styles/components/card.sass";

export function Card({ image, name, gender, status, species }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="content">
        <h2>{name}</h2>
        <div>{gender}</div>
        <div>{status}</div>
        <div>{species}</div>
      </div>
    </div>
  );
}
