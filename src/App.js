import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/userDashboard/Dashboard";
import { UserStorage } from './UserContext';

function App() {
  return (
    <UserStorage>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserStorage>
  );
}

export default App;
