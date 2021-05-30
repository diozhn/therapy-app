import React from 'react'
import { Route, Switch } from "react-router-dom";
import ResetPassword from "./ResetPassword";
import styles from "./Login.module.css";

const Login = () => {
  return (
      <section className={styles.login}>
        <div className={styles.forms}>
          <Switch>
            <Route path="/resetpassword"> 
              <ResetPassword />
            </Route>
          </Switch>
        </div>
      </section>
  )
}

export default Login
