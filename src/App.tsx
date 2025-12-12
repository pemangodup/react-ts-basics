import { useState } from "react";

import goalsImg from "../public/goals.jpg";
import Header from "./components/header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  // To add a goal
  function addGoalHandler() {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: "Learn React + TS",
      description: "Learn it in depth.",
    };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  // To delete goal
  function deleteGoalHandler(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals." }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </main>
  );
}
