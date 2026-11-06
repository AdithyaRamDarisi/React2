// Context API and Redux Toolkit Revision
// First, let's understand both concepts.
// Context API
// Definition: Context API shares data between components without passing props manually.

// Context API is useful for managing global data such as:
// - Theme (Dark/Light)
// - User authentication
// - User profile
// - Language preferences


// Without Context API, you must pass user information through multiple components using props.

// This is called Prop Drilling.

// With Context API, components can directly access shared information.


// createContext() – Creates a context.
// useContext() – Accesses shared context data.
// useState() – Manages theme state.
// Provider – Shares data with child components.
// children – Represents nested components.


// Redux Toolkit:
// Definition: Redux Toolkit manages shared application state centrally.

// Redux is useful when multiple components need access to the same application data.


// | Concept |                                               Definition |
// | Store |                                            Holds global application state. |
// | Slice |                                          Contains state and reducer logic. |
// | Action |                                              Describes a state change. |
// | Reducer |                                            Updates application state. |
// | Dispatch |                                           Sends actions to Redux. |
// | useSelector |                                      Reads data from Redux Store. |
// | useDispatch |                                          Dispatches Redux actions. |


// API Integration with Global State

// Definition:

// API integration connects frontend applications with external data sources.

// Global state allows multiple components to access API data.


// API Server
//     |
//     v
// Axios Request
//     |
//     v
// Redux Async Thunk
//     |
//     v
// Redux Store
//     |
//     v
// React Components


// Asynchronous API Handling

// Definition:
// Asynchronous API handling manages operations that take time without blocking execution.


// Promise: Represents the future result of an asynchronous operation.

// Async: Declares an asynchronous function.

// Await: Waits for a Promise to settle.

// createAsyncThunk(): Handles asynchronous Redux operations.


// Understanding createAsyncThunk()
// Redux Toolkit provides createAsyncThunk() to perform API requests.


import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",

    async () => {

        const response = await fetch(
            "http://localhost:5000/users"
        );

        return response.json();
    }
);


// fetchUsers creates an asynchronous action.
// async handles asynchronous execution.
// await waits for the API response.
// response.json() converts the response into JavaScript data.


// Loading, Success, and Error States
// Definition
// These states represent different stages of an API request.

// Whenever we fetch data, three situations can occur.
// State	                 Meaning
// Loading	            API request is processing.
// Success	           API request completed successfully.
// Error                 	API request failed.


// Redux Toolkit provides three lifecycle actions:
// 1. pending – Request started.
// 2. fulfilled – Request succeeded.
// 3. rejected – Request failed.



// Reusable Components and API Services
// Reusable Components
// Definition: Reusable components are UI elements used across multiple locations.

// Example:

// Instead of creating three separate user cards, create one UserCard component and reuse it.

/* {<UserCard name="Adithya" />
<UserCard name="Rahul" />
// <UserCard name="Kiran" /> } */



// API Services
// Definition: API services organize reusable functions for server communication.

// Instead of writing Axios requests inside every component, we create a separate service file.

// For example:
// src/
//  └── services/
//       └── api.js

