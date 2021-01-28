import { Route, Switch, Redirect } from "react-router-dom";

import Game from "./Game";
import Pentagon from "./Pentagon";

function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => <Pentagon {...routeProps} />}
      />
      <Route
        exact
        restricted
        path="/result"
        render={(routeProps) => <Game {...routeProps} />}
      />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
