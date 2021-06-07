import React from 'react'
import { TOKEN_POST, PRO_GET} from "./api";
import { useHistory } from 'react-router-dom';

export const ProContext = React.createContext();

export const ProStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  let navigate = useHistory();
  
  const userLogout = React.useCallback(
    async function proLogout() {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      navigate.push("/");
    },
    [navigate]
  );

  async function getProfessional() {
    const { url, options } = PRO_GET();
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json);
  }

  async function proLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const tokenRes = await fetch(url, options);
      if(!tokenRes.ok) throw new Error(`Errro: Usuário ou senha inválidos.`);
      await getProfessional();
      navigate.push("/dashboard");
    } catch(err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProContext.Provider
      value={{ proLogin, data, userLogout, error, loading, login }}>
      {children}
    </ProContext.Provider>
  )
}

