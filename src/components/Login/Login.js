import React from 'react'
import { Router, Route, Redirect, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LostPassword from "./LostPassword";
import ResetPassword from "./ResetPassword";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";

const Login = () => {

  const { login } = React.useContext(UserContext);
  if (login === true) return <Redirect push to="/dashboard" />
  return (
    <Router>
    <section className={styles.login}>
      <div className={styles.forms}>
        <Switch>
          <Route path="/register">
            <LoginCreate />
          </Route>
          <Route path="/resetpassword"> 
            <ResetPassword />
          </Route>
          <Route path="/lostpassword">
            <LostPassword />
          </Route>
          <Route path="/"> 
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </section>
    </Router>
  )
}

export default Login
