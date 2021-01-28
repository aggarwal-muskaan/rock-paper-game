import { createContext } from "react";
import { useTool } from "../hooks/useTool";

export const currTool = createContext();
export const selectTool = createContext();

function ManageTool({ children }) {
  const [user, newState, reset] = useTool("");
  return (
    <currTool.Provider value={{ user, reset }}>
      <selectTool.Provider value={newState}>{children}</selectTool.Provider>
    </currTool.Provider>
  );
}

export { ManageTool };
