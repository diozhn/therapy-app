import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./routes";
import { UserStorage } from "./UserContext";
import history from "./service/history";
import { ProStorage } from "./ProContext";

function App() {
  return (
    <ProStorage>
      <UserStorage>
        <Router history={history}>
          <Routes />
        </Router>
      </UserStorage>
    </ProStorage>
  );
}

export default App;
