import React from "react";

const Project = (props) => {
  return (
    <div className="container">
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
      <img src={props.img} />
    </div>
  )
}

export default Project