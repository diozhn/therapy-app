import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./routes";
import { UserStorage } from "./UserContext";
import history from "./service/history";
import { ProStorage } from "./ProContext";
import { ChatStorage } from "./ChatContext";

function App() {
  return (
    <ChatStorage>
      <ProStorage>
        <Router history={history}>
          <UserStorage>
            <Routes />
          </UserStorage>
        </Router>
      </ProStorage>
    </ChatStorage>
  );
}

export default App;
