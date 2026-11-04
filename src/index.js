// Introduction to Redux and Redux Toolkit
// What is Redux?

// Redux is a state management library used to manage and share application data across multiple 
// components.

// Example:

// Imagine an e-commerce application:

// Navbar displays the cart count.
// Product page adds products to the cart.
// Cart page displays selected products.
// Checkout page uses cart information.

// Instead of passing data through multiple components using props, Redux allows components to 
// access shared state.


// What is Redux Toolkit (RTK)?

// Redux Toolkit is the official recommended way to write Redux logic with less code and 
// simpler configuration.

// It provides:

// configureStore() – Creates the Redux store.
// createSlice() – Creates reducers and actions.
// createAsyncThunk() – Handles asynchronous operations.
// Simplified state management.


// Redux                         vs                     Redux Toolkit
// Redux	                                           Redux Toolkit
// More boilerplate code	                      Less boilerplate code
// Manual configuration                       	Simplified configuration
// Separate action creators	                  Automatically generates actions
// Manual reducer setup	                        Uses createSlice

// Redux Architecture and Data Flow

// Redux follows a unidirectional data flow.

// The architecture contains four important parts:

// Store – Holds application state.
// Actions – Describe what should happen.
// Reducers – Update the state.
// Dispatch – Sends actions to reducers.


// Redux Data Flow 

// The process:

// User clicks a button.
// Component dispatches an action.
// Reducer processes the action.
// Store updates the state.
// Components receive updated state.
// UI displays the updated information.


// Store, Actions, Reducers, and Dispatch

//  1. Store

// The store is the central place where Redux maintains application state.

// Example:

// const initialState = {
//     count: 0
// };


// 2.Actions

// Actions describe what should happen to the state.

// Examples:

// Increment
// Decrement
// Reset


// 3.Reducers

// Reducers are functions responsible for updating the state based on dispatched actions.

// Example:

// function counterReducer(state, action) {
//     switch (action.type) {
//         case "INCREMENT":
//             return { count: state.count + 1 };

//         case "DECREMENT":
//             return { count: state.count - 1 };

//         default:
//             return state;
//     }
// }


// Dispatch

// Dispatch sends an action to the Redux store.

// Example:

// dispatch({ type: "INCREMENT" });


// Redux Toolkit Slices

// A slice is a collection of Redux logic for a particular feature.

// It contains:

// Slice name
// Initial state
// Reducers
// Automatically generated actions

// We use createSlice() to create a slice.



// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//     name: "counter",

//     initialState: {
//         count: 0
//     },

//     reducers: {
//         increment: (state) => {
//             state.count += 1;
//         },

//         decrement: (state) => {
//             state.count -= 1;
//         },

//         reset: (state) => {
//             state.count = 0;
//         }
//     }
// });

// export const { increment, decrement, reset } =
//     counterSlice.actions;

// export default counterSlice.reducer;



// useSelector() and useDispatch() Hooks

// React Redux provides two important hooks.

// useSelector()

// useSelector() accesses data from the Redux store.

// Example:

// const countValue = useSelector(
//     (state) => state.counter.count
// );


// useDispatch()

// useDispatch() allows components to dispatch actions to Redux.

// Example:

// const dispatch = useDispatch();

// dispatch(increment());


