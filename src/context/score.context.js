import React, { createContext } from "react";
import useScore from "../hooks/useScore";

export const currentScore = createContext();
export const editScore = createContext();

function ManageScore(props) {
  const [state, dispatch] = useScore();

  return (
    <currentScore.Provider value={state}>
      <editScore.Provider value={dispatch}>{props.children}</editScore.Provider>
    </currentScore.Provider>
  );
}

export { ManageScore };
