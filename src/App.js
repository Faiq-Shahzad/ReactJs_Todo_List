import GoalList from "./components/GoalList";
import CourseGoal from "./components/CourseGoal";
import { useState } from "react";

const App = () =>{

  const dummyGoals = [
    {key: "g1", title: "Do all Exercises!"},
    {key: "g2", title: "Finish the Course"}
  ];

  const [goals, setGoals] = useState(dummyGoals)


  return (
    <div style={{alignItems: 'center', justifyContent:"center"}}>
      <CourseGoal />
      <GoalList items={goals} /> 
      
    </div>
  );
}

export default App;
