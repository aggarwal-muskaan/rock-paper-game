import { useReducer, useEffect } from "react";

function useSessionStorage(init, reducer, key) {
  const [state, dispatch] = useReducer(reducer, init, () => {
    let prevScore;
    try {
      prevScore =
        JSON.parse(window.sessionStorage.getItem(key)) || String(init);
    } catch (e) {
      prevScore = init;
    }
    return prevScore;
  });

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export default useSessionStorage;
