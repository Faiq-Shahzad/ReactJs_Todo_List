import React, { useState } from 'react'
import Goal from './Goal';

const GoalList = (props) => {

  const [list, setList] = useState(props.items)

  const onDeleteHandler = (id) =>{
    setList(list.filter((element) => element.id !== id))
  }
  return (
    <div>
      {props.items.map((goals) =>(
        <Goal title={goals.title} onDelete={onDeleteHandler} />
      ))}
    </div>
  )
}

export default GoalList