import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/context";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Home from "../screens/Home";

const Routes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const routes = isLoggedIn ? (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/notifactions">
        <Home />
      </Route>
      <Redirect to="/home" />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );

  return <Router>{routes}</Router>;
};

export default Routes;
