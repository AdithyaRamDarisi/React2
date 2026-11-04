import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskStats() {

  const { state } = useContext(TaskContext);

  const totalTasks = state.tasks.length;

  const completedTasks = state.tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <div>

      <h2>Task Statistics</h2>

      <p>Total Tasks: {totalTasks}</p>

      <p>Completed Tasks: {completedTasks}</p>

      <p>Pending Tasks: {pendingTasks}</p>

    </div>
  );
}

export default TaskStats;