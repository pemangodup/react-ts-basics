import { useState } from "react";

import goalsImg from "../public/goals.jpg";
import Header from "./components/header";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

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

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals." }}>
        <h1>Your Course Goals</h1>
      </Header>

      <button onClick={addGoalHandler}>Click Me</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}
