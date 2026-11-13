import { useReducer, useEffect } from "react";

import { useDispatch } from "react-redux";

import {
    addTask,
    updateTask
} from "../redux/tasksSlice";

const initialState = {
    title: "",
    description: "",
    priority: "Medium",
    error: ""
};

function formReducer(state, action) {

    switch (action.type) {

        case "UPDATE_FIELD":

            return {
                ...state,
                [action.field]: action.value,
                error: ""
            };

        case "SET_ERROR":

            return {
                ...state,
                error: action.payload
            };

        case "SET_FORM":

            return {
                ...action.payload,
                error: ""
            };

        case "RESET":

            return initialState;

        default:
            return state;

    }

}

function TaskForm({ editingTask, setEditingTask }) {

    const [formState, dispatchForm] = useReducer(
        formReducer,
        initialState
    );

    const dispatch = useDispatch();

    useEffect(() => {

        if (editingTask) {

            dispatchForm({
                type: "SET_FORM",
                payload: {
                    title: editingTask.title,
                    description: editingTask.description,
                    priority: editingTask.priority
                }
            });

        } else {

            dispatchForm({ type: "RESET" });

        }

    }, [editingTask]);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!formState.title.trim()) {

            dispatchForm({
                type: "SET_ERROR",
                payload: "Task title is required"
            });

            return;
        }

        const taskData = {
            title: formState.title,
            description: formState.description,
            priority: formState.priority
        };

        if (editingTask) {

            dispatch(updateTask({
                id: editingTask.id,
                ...taskData
            }));

            setEditingTask(null);

        } else {

            dispatch(addTask(taskData));

        }

        dispatchForm({ type: "RESET" });

    };

    return (

        <form className="task-form" onSubmit={handleSubmit}>

            <h2>
                {editingTask ? "Update Task" : "Add New Task"}
            </h2>

            <input
                type="text"
                placeholder="Enter task title"
                value={formState.title}
                onChange={(e) =>
                    dispatchForm({
                        type: "UPDATE_FIELD",
                        field: "title",
                        value: e.target.value
                    })
                }
            />

            <textarea
                placeholder="Enter task description"
                value={formState.description}
                onChange={(e) =>
                    dispatchForm({
                        type: "UPDATE_FIELD",
                        field: "description",
                        value: e.target.value
                    })
                }
            />

            <select
                value={formState.priority}
                onChange={(e) =>
                    dispatchForm({
                        type: "UPDATE_FIELD",
                        field: "priority",
                        value: e.target.value
                    })
                }
            >

                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>

            </select>

            {formState.error && (
                <p className="error">{formState.error}</p>
            )}

            <button type="submit">
                {editingTask ? "Update Task" : "Add Task"}
            </button>

            {editingTask && (

                <button
                    type="button"
                    onClick={() => setEditingTask(null)}
                >
                    Cancel
                </button>

            )}

        </form>

    );

}

export default TaskForm;