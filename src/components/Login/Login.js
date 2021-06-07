import React from 'react'
import styles from "./Login.module.css";
import LoginForm from './LoginForm';

const Login = () => {
  return (
      <section className={styles.login}>
        <div className={styles.forms}>
        <LoginForm />
        </div>
      </section>
  )
}

export default Login
