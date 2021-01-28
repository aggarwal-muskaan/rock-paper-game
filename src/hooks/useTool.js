import { useState } from "react";

function useTool(init = "") {
  const [state, setState] = useState(init);
  const newState = (newTool) => {
    setState(newTool);
  };
  const reset = () => {
    setState("");
  };
  return [state, newState, reset];
}

export { useTool };
