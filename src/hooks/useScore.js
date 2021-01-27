import { useReducer } from "react";

function useScore(init = 0) {
  const [state, dispatch] = useReducer(reducer, init);
  function reducer(state, action) {
    switch (action.type) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  }

  return [state, dispatch];
}

export default useScore;
