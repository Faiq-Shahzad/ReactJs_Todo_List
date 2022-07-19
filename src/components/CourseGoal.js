import React, { useState } from "react";
import "./CourseGoal.css";

const CourseGoal = (props) => {
  const [title, setTitle] = useState("");
  const [isInvalid, setInvalid] = useState(false);

  const addGoalHandler = (event) => {
    setTitle(event.target.value);
  };

  const onSubmitHandler = (event) => {
    const goalData = {
      key: Math.random(),
      title: title,
    };
    if (title.trim().length === 0) {
      setInvalid(true)
      alert("Please Enter a Valid Input");
    } else {
      props.onAddClick(goalData);
    }
  };

  return (
    <div className="course-goal">
      <h2 style={{color: isInvalid ? "red" : "black"}}>Course Goal</h2>
      <input
        style={{ width: "100%", borderColor: isInvalid ? "red" : "black"}}
        type="text"
        value={title}
        onChange={addGoalHandler}
      />
      <br></br>

      <div className="button-goal">
        <button style={{backgroundColor: isInvalid ? "red" : "rgb(128, 9, 82)"}} type="submit" onClick={onSubmitHandler}>
          Add Goal
        </button>
      </div>
    </div>
  );
};

export default CourseGoal;
