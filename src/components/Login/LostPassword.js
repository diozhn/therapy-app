import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Error from "../Helper/Error";
import styles from "./LostPassword.module.css";

function LostPassword() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lostpassword", "resetpassword"),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section className={`${styles.login} animeLeft`}>

      {data ? (
        <p style={{color: '#4c1'}}>{data}</p>
      ) : (
        <form className={styles.forms} onSubmit={handleSubmit}>
          <h1 className="title">Recuperar senha</h1>
          <Input label="Email" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
}

export default LostPassword;
