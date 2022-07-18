import React, { useState } from 'react'
import "./CourseGoal.css";

const CourseGoal = (props) => {

  const [title, setTitle] = useState("");


  const addGoalHandler = (event) =>{
    setTitle(event.target.value)
  }

  const onSubmitHandler = (event) =>{
    const goalData = {
      title: title
    }

    props.onAddClick(goalData);
  }

  return (
    <div className="course-goal">
      <h2>Course Goal</h2>
      <input style={{width:"100%"}} type="text" value={title} onChange={addGoalHandler} />
      <br></br>

      <div className='button-goal'>
        <button  type="submit" onClick={onSubmitHandler}>Add Goal</button>
      </div>
      
    </div>

  )
}

export default CourseGoal;