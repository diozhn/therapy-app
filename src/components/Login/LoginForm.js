import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { UserContext } from '../../UserContext';
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const email = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if(email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Entrar</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.forgot} to="/lostpassword">
          Esqueci minha senha
      </Link>
      <div className={styles.cadastro}>
        <p>
          Não tem uma conta? 
           <Link className={styles.button} to="/register" style={{marginLeft: '10px'}}>
            Registre-se
          </Link>
        </p>
        <p>
          É um profissonal? 
           <Link className={styles.button} to="/proregister" style={{marginLeft: '10px'}}>
            Registre-se
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
