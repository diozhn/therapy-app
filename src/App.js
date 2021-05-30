import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./routes";
import { UserStorage } from "./UserContext";
import history from './service/history'

function App() {
  return (
    <Router>
    <UserStorage>
      <Routes />
    </UserStorage>
    </Router>

  );
}

export default App;
