import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {

  const { dispatch } = useContext(TaskContext);

  const [taskTitle, setTaskTitle] = useState("");

  function handleSubmit(event) {

    event.preventDefault();

    if (taskTitle.trim() === "") {
      return;
    }

    dispatch({
      type: "ADD_TASK",
      payload: taskTitle
    });

    setTaskTitle("");
  }

  return (
    <div>
      <h2>Add New Task</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your task"
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
        />

        <button type="submit">
          Add Task
        </button>

      </form>
    </div>
  );
}

export default TaskForm;