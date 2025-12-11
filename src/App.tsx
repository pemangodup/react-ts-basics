import CourseGoal from "./components/CourseGoal";
import goalsImg from "../public/goals.jpg";
import Header from "./components/header";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler() {
    setGoals([{ title: "Pema", description: "Htis is it.", id: 1 }]);
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals." }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn React + TS">
        Learn react from beginning.
      </CourseGoal>
      <button onClick={addGoalHandler}>Click Me</button>
    </main>
  );
}
