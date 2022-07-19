import React from "react";
import styles from "./Goal.module.css";

const Goal = (props) => {
  const deleteItemHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <div className={styles.goal} onClick={() => deleteItemHandler(props.key)}>
      {props.title}
    </div>
  );
};

export default Goal;