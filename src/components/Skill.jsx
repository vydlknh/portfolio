import React from "react";

const Skill = (props) => {
  return (
    <div className="container py-2">
      <img src={props.img} style={{height: "50px"}} alt={props.name}/>
      <p>{props.name}</p>
    </div>
  )
}

export default Skill