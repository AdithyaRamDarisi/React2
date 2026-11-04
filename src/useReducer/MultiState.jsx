import React, { useReducer } from "react";

// Types
const FETCH_INIT = "FETCH_INIT";
const FETCH_START = "FETCH_START";
const FETCH_ERROR = "FETCH_ERROR";

const initialState = {
  loading: true,
  data: null,
  error: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };

    case FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const MultiState = () => {
  const [state, dispatch] = useReducer(
    dataReducer,
    initialState
  );

  return (
    <div>
      <h2>MultiState</h2>

      <p>Loading: {state.loading ? "Yes" : "No"}</p>

      {state.error && <p>Error: {state.error}</p>}
    </div>
  );
};

export default MultiState;