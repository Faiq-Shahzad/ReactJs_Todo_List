import React from "react";
import './Goal.css'

const Goal = (props) => {
  const deleteItemHandler = (id) =>{
    props.onDelete(id);
  }
  return <div className="goal" onClick={()=>deleteItemHandler(props.key)}>{props.title}</div>;
};

export default Goal;
