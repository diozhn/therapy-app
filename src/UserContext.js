import React from 'react'
import { TOKEN_POST, USER_GET} from "./api";
import { useHistory } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  let navigate = useHistory();
  
  const userLogout = React.useCallback(
    async function userLogout() {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      navigate.push("/");
    },
    [navigate]
  );

  async function getUser() {
    const { url, options } = USER_GET();
    const response = await fetch(url, options);
    console.log(response)
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json);
  }

  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const tokenRes = await fetch(url, options);
      console.log(tokenRes)
      if(!tokenRes.ok) throw new Error(`Errro: Usuário ou senha inválidos.`);
      await getUser();
      navigate.push("/dashboard");
    } catch(err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, error, loading, login }}>
      {children}
    </UserContext.Provider>
  )
}

