import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({

    name: "tasks",

    initialState: {
        tasks: []
    },

    reducers: {

        addTask: (state, action) => {

            state.tasks.push({
                id: crypto.randomUUID(),
                ...action.payload,
                completed: false
            });

        },

        updateTask: (state, action) => {

            const index = state.tasks.findIndex(
                task => task.id === action.payload.id
            );

            if (index !== -1) {
                state.tasks[index] = {
                    ...state.tasks[index],
                    ...action.payload
                };
            }

        },

        deleteTask: (state, action) => {

            state.tasks = state.tasks.filter(
                task => task.id !== action.payload
            );

        },

        toggleTask: (state, action) => {

            const task = state.tasks.find(
                task => task.id === action.payload
            );

            if (task) {
                task.completed = !task.completed;
            }

        }

    }

});

export const {
    addTask,
    updateTask,
    deleteTask,
    toggleTask
} = tasksSlice.actions;

export default tasksSlice.reducer;