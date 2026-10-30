import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {

  const { state, dispatch } = useContext(TaskContext);

  return (
    <div>

      <h2>Task List</h2>

      {state.tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (

        state.tasks.map((task) => (

          <div key={task.id}>

            <span
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {task.title}
            </span>

            <button
              onClick={() =>
                dispatch({
                  type: "TOGGLE_TASK",
                  payload: task.id
                })
              }
            >
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TASK",
                  payload: task.id
                })
              }
            >
              Delete
            </button>

          </div>

        ))

      )}

      <button
        onClick={() => dispatch({ type: "CLEAR_TASKS" })}
      >
        Clear All Tasks
      </button>

    </div>
  );
}

export default TaskList;