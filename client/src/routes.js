import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { 
  AdminDashboard,
  Login
} from "./pages";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact strict path="/">
          <AdminDashboard />
        </Route>
        <Route exact strict path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;