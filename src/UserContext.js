import React from "react";
import { TOKEN_POST } from "./api";
import { useHistory } from "react-router-dom";
import axios from "axios";

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

  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url } = TOKEN_POST({ email, password });
      const { data } = await axios.post(url, { email, password });
      console.log(data)
      navigate.push("/dashboard")
    } catch (err) {
      setError(err.response.data.Message);
      console.log(err.response.data)
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
