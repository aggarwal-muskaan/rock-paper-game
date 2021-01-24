import { Route, Switch, Redirect } from "react-router-dom";

import Game from "./Game";
import Pentagon from "./Pentagon";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Pentagon />} />
      <Route exact path="/result" render={() => <Game />} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
