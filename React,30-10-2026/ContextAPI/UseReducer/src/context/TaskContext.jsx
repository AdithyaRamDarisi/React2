import { createContext, useReducer } from "react";

export const TaskContext = createContext();

const initialState = {
  tasks: []
};

function taskReducer(state, action) {

  switch (action.type) {

    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            title: action.payload,
            completed: false
          }
        ]
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        )
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };

    case "CLEAR_TASKS":
      return {
        ...state,
        tasks: []
      };

    default:
      return state;
  }
}

export function TaskProvider({ children }) {

  const [state, dispatch] = useReducer(
    taskReducer,
    initialState
  );

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}