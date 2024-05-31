import React from "react";

const Skill = (props) => {
  return (
    <div className="container">
      <img src={props.img} />
      <p>{props.name}</p>
    </div>
  )
}

export default Skill