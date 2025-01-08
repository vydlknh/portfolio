import React from "react";

const Project = (props) => {
  return (
    <div className="container">
      <img src={props.img} style={{width: "100%"}} alt={props.name}/>
      <h3 className="is-size-4 has-text-weight-bold has-text-primary-30 py-1">{props.name}</h3>
      <p className="py-2">{props.desc}</p>
      <a className="button my-2" href={props.url} target="_blank">
        <span>Source code</span>
        <span className="icon">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </span>
      </a>
    </div>
  )
}

export default Project