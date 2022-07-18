import React from 'react'
import "./CourseGoal.css";

const CourseGoal = () => {
  return (
    <div className="course-goal">
      <h2>Course Goal</h2>
      <input style={{width:"100%"}} type="text" />
      <br></br>

      <div className='button-goal'>
        <button  type="submit">Add Goal</button>
      </div>
      
    </div>

  )
}

export default CourseGoal;