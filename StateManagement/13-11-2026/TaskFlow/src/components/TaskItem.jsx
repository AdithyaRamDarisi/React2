import { useDispatch } from "react-redux";

import {
    deleteTask,
    toggleTask
} from "../redux/tasksSlice";

function TaskItem({ task, onEdit }) {

    const dispatch = useDispatch();

    return (

        <div className="task-card">

            <h3 className={task.completed ? "completed" : ""}>
                {task.title}
            </h3>

            <p>{task.description}</p>

            <p>Priority: {task.priority}</p>

            <p>
                Status: {task.completed ? "Completed" : "Pending"}
            </p>

            <button
                onClick={() => dispatch(toggleTask(task.id))}
            >
                Complete
            </button>

            <button onClick={() => onEdit(task)}>
                Edit
            </button>

            <button
                onClick={() => dispatch(deleteTask(task.id))}
            >
                Delete
            </button>

        </div>

    );

}

export default TaskItem;