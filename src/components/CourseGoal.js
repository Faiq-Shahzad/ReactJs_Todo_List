import React, { useState } from "react";
import styled from "styled-components";
import "./CourseGoal.css";

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
    <CourseGoalDiv className={isInvalid ? "invalid" : ""}>
      <h2>Course Goal</h2>
      <input
        style={{ width: "100%" }}
        type="text"
        value={title}
        onChange={addGoalHandler}
      />
      <br></br>

      <CourseGoalBtn>
        <button type="submit" onClick={onSubmitHandler}>
          Add Goal
        </button>
      </CourseGoalBtn>
    </CourseGoalDiv>
  );
};

export default CourseGoal;

const CourseGoalDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  padding: 2%;
  padding-left: 2%;
  padding-right: 2%;
  width: 24%;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 3%;

  & input {
    padding: 1.5%;
    border-radius: 5px;
    border-color: rgb(155, 141, 141);
  }

  & input:focus {
    background-color: rgb(243, 200, 220);
    color: black;
    font-weight: bold;
  }

  &.invalid input {
    background-color: salmon;
    border-color: red;
  }

  &.invalid h2 {
    color: red;
  }
`;

const CourseGoalBtn = styled.div`
  & button {
    background-color: rgb(128, 9, 82);
    color: white;
    padding: 2%;
    font-size: medium;
    margin-top: 1.5%;
  }

  & button:hover {
    background-color: rgb(194, 18, 127);
    border-color: rgb(194, 18, 127);
  }
`;
