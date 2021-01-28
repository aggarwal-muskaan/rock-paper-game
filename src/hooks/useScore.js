// import { useReducer } from "react";

// function useScore() {
//   const [state, dispatch] = useReducer(reducer, init);

//* converted hook into non-functional component
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

//   return [state, dispatch];
// }

export { reducer };
