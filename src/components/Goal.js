import React from "react";
import styled from "styled-components";

const Goal = (props) => {
  const deleteItemHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <GoalDiv onClick={() => deleteItemHandler(props.key)}>
      {props.title}
    </GoalDiv>
  );
};

export default Goal;

const GoalDiv = styled.div`
  background-color: rgb(128, 9, 82);
  margin-top: 1%;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: medium;
  padding: 0.5%;
  padding-left: 1%;
`;
