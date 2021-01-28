import React, { createContext } from "react";
import useSessionStorage from "../hooks/useSessionStorage";
import { reducer } from "../hooks/useScore";

// context one
export const currentScore = createContext();
// context two
export const editScore = createContext();

function ManageScore(props) {
  //   const [state, dispatch] = useScore();
  const [state, dispatch] = useSessionStorage(0, reducer, "score");

  return (
    <currentScore.Provider value={state}>
      <editScore.Provider value={dispatch}>{props.children}</editScore.Provider>
    </currentScore.Provider>
  );
}

export { ManageScore };
