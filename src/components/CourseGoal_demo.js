import React, { useState } from "react";
import styles from "./CourseGoal.module.css";

const CourseGoal = (props) => {
  const [title, setTitle] = useState("");
  const [isInvalid, setInvalid] = useState(false);

  const addGoalHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setInvalid(false);
    }
    setTitle(event.target.value);
  };

  const onSubmitHandler = (event) => {
    const goalData = {
      key: Math.random(),
      title: title,
    };
    if (title.trim().length === 0) {
      setInvalid(true);
    } else {
      props.onAddClick(goalData);
      setTitle("");
    }
  };

  return (
    <div className={`${styles['course-goal']} ${isInvalid && styles.invalid}`}>
      <h2>Course Goal</h2>
      <input
        style={{ width: "100%" }}
        type="text"
        value={title}
        onChange={addGoalHandler}
      />
      <br></br>

      <div className={styles['button-goal']}>
        <button type="submit" onClick={onSubmitHandler}>
          Add Goal
        </button>
      </div>
    </div>
  );
};

export default CourseGoal;