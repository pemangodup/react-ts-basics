import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";

type CourseGoalListProps = {
  goals: CGoal[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>{goal.description}</CourseGoal>
        </li>
      ))}
    </ul>
  );
}
