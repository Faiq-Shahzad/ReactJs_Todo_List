import React from 'react'
import "./GoalList.css"
import Goal from './Goal';

const GoalList = (props) => {
  return (
    <div>
      {props.items.map((goals) =>(
        <Goal title={goals.title} />
      ))}
    </div>
  )
}

export default GoalList