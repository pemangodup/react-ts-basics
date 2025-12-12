import { type FormEvent } from "react";

export default function newGoal() {
  function submitHandler(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label>Your Goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
