import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import styles from "./LoginCreate.module.css";

const LoginCreate = () => {
  const name = useForm();
  const cpf = useForm("cpf");
  const email = useForm("email");
  const password = useForm("password");
  const city = useForm();
  const state = useForm();
  const birthDate = useForm()

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      name: name.value,
      cpf: cpf.value,
      email: email.value,
      password: password.value,
      city: city.value,
      state: state.value,
      birthDate: birthDate.value
    });
    const { response } = await request(url, options);
      if (response.ok) userLogin(email.value, password.value);
    console.log(response);
  }

  return (
    <div>
      <section className={`${styles.login} animeLeft`}>
        <form className={styles.forms} onSubmit={handleSubmit}>
          <h1 className="title">Registre-se</h1>
          <div className={styles.divider}>
            <Input label="Nome" type="text" name="nome" {...name} style={{display: 'block'}} />
            <Input label="CPF" type="text" name="cpf" {...cpf} />
          </div>
          <div className={styles.divider}>
            <Input label="E-mail" type="email" name="email" {...email} />
            <Input label="Senha" type="password" name="password" {...password} />
          </div>
          <div className={styles.divider}>
            <Input label="Cidade" type="text" name="city" {...city} />
            <Input label="Estado" type="text" name="state" {...state} />
          </div>
          <div className={styles.divider}>
            <Input label="Data de Nascimento" type="date" name="birthDate" {...birthDate} />
          </div>

          {loading ? (
            <Button disabled>Registrando...</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}
          <Error error={error} />
        </form>
      </section>
    </div>
  );
};

export default LoginCreate;
