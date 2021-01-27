import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";

import Game from "./Game";
import Pentagon from "./Pentagon";

function Routes() {
  // const state = { name: "" };
  const [state, setState] = useState(null);
  const updateState = (tool) => {
    setState(tool);
  };
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Pentagon handleClick={updateState} />}
      />
      <Route
        exact
        restricted
        path="/result"
        render={(routeProps) => <Game userTool={state} {...routeProps} />}
      />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
